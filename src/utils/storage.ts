import { TeamMember } from '../types';
import { INITIAL_TEAM_MEMBERS } from '../data/initialData';

const STORAGE_KEY = 'italia_immigrazione_team_v2';

export function getStoredTeamMembers(): TeamMember[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Check legacy key v1 and migrate if needed
      const legacyRaw = localStorage.getItem('italia_immigrazione_team_v1');
      if (legacyRaw) {
        const legacyParsed = JSON.parse(legacyRaw);
        if (Array.isArray(legacyParsed) && legacyParsed.length > 0) {
          const merged = legacyParsed.map((member) => {
            const initialMatch = INITIAL_TEAM_MEMBERS.find((i) => i.id === member.id);
            return {
              ...member,
              photoUrl: member.photoUrl || (initialMatch ? initialMatch.photoUrl : null)
            };
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          return merged.sort((a, b) => (a.order || 0) - (b.order || 0));
        }
      }
      return INITIAL_TEAM_MEMBERS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const merged = parsed.map((member) => {
        const initialMatch = INITIAL_TEAM_MEMBERS.find((i) => i.id === member.id);
        return {
          ...member,
          photoUrl: member.photoUrl || (initialMatch ? initialMatch.photoUrl : null)
        };
      });
      const existingIds = new Set(parsed.map((m) => m.id));
      const missingInitial = INITIAL_TEAM_MEMBERS.filter((m) => !existingIds.has(m.id));
      const combined = [...merged, ...missingInitial];
      return combined.sort((a, b) => (a.order || 0) - (b.order || 0));
    }
  } catch (err) {
    console.error('Error reading team members from localStorage:', err);
  }
  return INITIAL_TEAM_MEMBERS;
}

export function saveStoredTeamMembers(members: TeamMember[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
    // Dispatch custom event so all components react immediately
    window.dispatchEvent(new Event('team-updated'));
    return true;
  } catch (err) {
    console.error('Error saving team members to localStorage:', err);
    return false;
  }
}

export function resetStoredTeamMembers(): TeamMember[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('team-updated'));
  } catch (err) {
    console.error('Error resetting team members:', err);
  }
  return INITIAL_TEAM_MEMBERS;
}

/**
 * Validates and compresses an uploaded image file into an optimized Data URL
 * to avoid localStorage 5MB limit issues while maintaining crisp portrait quality.
 */
export async function processUploadedImage(
  file: File,
  maxWidth = 800,
  maxHeight = 800
): Promise<{ success: boolean; dataUrl?: string; error?: string }> {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type.toLowerCase())) {
    return {
      success: false,
      error: 'Formato file non supportato. Utilizzare solo formati JPG, PNG o WebP.'
    };
  }

  // Check initial size: limit to 8MB
  if (file.size > 8 * 1024 * 1024) {
    return {
      success: false,
      error: 'La dimensione del file supera 8 MB. Scegliere un file più leggero.'
    };
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve({ success: false, error: 'Errore durante la manipolazione dell\'immagine.' });
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/webp', 0.88);
          resolve({ success: true, dataUrl: compressedDataUrl });
        } catch (err) {
          resolve({ success: false, error: 'Errore durante l\'elaborazione dell\'immagine.' });
        }
      };
      img.onerror = () => {
        resolve({ success: false, error: 'Impossibile leggere il file immagine selezionato.' });
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      resolve({ success: false, error: 'Errore di lettura del file dal computer.' });
    };
    reader.readAsDataURL(file);
  });
}
