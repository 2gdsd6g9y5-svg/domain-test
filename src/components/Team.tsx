import React, { useState, useRef } from 'react';
import { Camera, Trash2, Settings, MessageCircle, Check } from 'lucide-react';
import { TeamMember } from '../types';
import { AdminTeamModal } from './AdminTeamModal';
import { processUploadedImage, saveStoredTeamMembers } from '../utils/storage';

interface TeamProps {
  members: TeamMember[];
  onUpdateMembers: (newMembers: TeamMember[]) => void;
  onSelectMemberForContact?: (memberName: string) => void;
}

export const Team: React.FC<TeamProps> = ({
  members,
  onUpdateMembers,
  onSelectMemberForContact
}) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeUploadMemberId, setActiveUploadMemberId] = useState<string | null>(null);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);
  const quickFileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 3500);
  };

  const handleQuickPhotoClick = (memberId: string) => {
    setActiveUploadMemberId(memberId);
    if (quickFileInputRef.current) {
      quickFileInputRef.current.value = '';
      quickFileInputRef.current.click();
    }
  };

  const handleQuickFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeUploadMemberId) return;

    const result = await processUploadedImage(file, 800, 800);
    if (result.success && result.dataUrl) {
      const updated = members.map((m) =>
        m.id === activeUploadMemberId ? { ...m, photoUrl: result.dataUrl } : m
      );
      saveStoredTeamMembers(updated);
      onUpdateMembers(updated);
      showToast('Fotografia aggiornata e salvata con successo!');
    } else {
      showToast(result.error || 'Errore durante il caricamento del file.');
    }
  };

  const handleRemoveMemberPhoto = (memberId: string) => {
    const updated = members.map((m) =>
      m.id === memberId ? { ...m, photoUrl: null } : m
    );
    saveStoredTeamMembers(updated);
    onUpdateMembers(updated);
    showToast('Fotografia rimossa.');
  };

  const handleContactMember = (member: TeamMember) => {
    if (onSelectMemberForContact) {
      onSelectMemberForContact(member.name);
    }
    const message = encodeURIComponent(
      `Buongiorno, vorrei un colloquio di orientamento con il vostro team (${member.name} - ${member.role}).`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/393532136704?text=${message}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const displayMembers = [...members].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section id="team" className="py-20 sm:py-28 lg:py-32 bg-[#FCFAF6] text-[#191817] border-t border-[#E7DED4] relative">
      <input
        ref={quickFileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleQuickFileChange}
        className="hidden"
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
              IL NOSTRO TEAM
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
              Competenza, serietà e attenzione alle persone.
            </h2>
            <p className="text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
              Consulenti dedicati e avvocati collaboratori specializzati, al servizio della tua serenità.
            </p>
          </div>

          {/* Pulsante Gestione Team (riservato per caricamento foto) */}
          <button
            type="button"
            onClick={() => setIsAdminOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#536176] hover:text-[#191817] border border-[#E7DED4] hover:border-[#191817] transition-colors rounded-sm self-start md:self-end bg-white"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Gestisci Team &amp; Foto</span>
          </button>
        </div>

        {/* Feedback toast */}
        {feedbackToast && (
          <div className="mb-6 p-3 bg-white border border-[#B45F42] text-xs text-[#191817] flex items-center gap-2 shadow-xs">
            <Check className="w-4 h-4 text-[#B45F42]" />
            <span>{feedbackToast}</span>
          </div>
        )}

        {/* Griglia Team Editoriale con foto in proporzione armoniosa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 xl:gap-6">
          {displayMembers.map((member) => {
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();

            return (
              <div
                key={member.id}
                className="flex flex-col justify-between pt-6 border-t border-[#E7DED4] group hover:border-[#B45F42] transition-colors duration-300"
              >
                <div>
                  {/* Foto ritratto o segnaposto raffinato */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E7DED4] bg-white rounded-xs mb-5 group/photo">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.photoAlt || member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4EFEA] text-[#536176] p-6 text-center">
                        <span className="font-serif-luxury text-4xl text-[#B45F42] mb-2 font-normal">
                          {initials}
                        </span>
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#536176]">
                          {member.name}
                        </span>
                      </div>
                    )}

                    {/* Quick photo buttons hover overlay */}
                    <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover/photo:opacity-100 transition-opacity bg-white/90 p-1 border border-[#E7DED4]">
                      <button
                        type="button"
                        onClick={() => handleQuickPhotoClick(member.id)}
                        className="p-1 hover:text-[#B45F42] text-[#191817] transition-colors"
                        title="Carica o sostituisci foto"
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                      {member.photoUrl && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMemberPhoto(member.id)}
                          className="p-1 hover:text-red-600 text-[#536176] transition-colors"
                          title="Rimuovi foto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Badge esperienza se presente */}
                    {member.experienceLabel && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 border border-[#E7DED4] text-[10px] font-medium text-[#191817]">
                        {member.experienceLabel}
                      </div>
                    )}
                  </div>

                  {/* Nome e Ruolo */}
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#191817] leading-snug">
                    {member.name}
                  </h3>

                  <p className="text-xs text-[#B45F42] font-medium mt-1 mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-[13px] text-[#536176] leading-relaxed line-clamp-4 font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Contatto rapido */}
                <div className="pt-5 mt-5 border-t border-[#E7DED4]/60">
                  <button
                    type="button"
                    onClick={() => handleContactMember(member)}
                    className="w-full py-2 px-3 text-xs font-medium text-[#191817] bg-white hover:bg-[#E7DED4]/30 border border-[#E7DED4] transition-colors flex items-center justify-center gap-1.5 rounded-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#B45F42]" />
                    <span>Contatta per orientamento</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal di Amministrazione Team */}
      <AdminTeamModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        members={members}
        onSave={onUpdateMembers}
      />
    </section>
  );
};
