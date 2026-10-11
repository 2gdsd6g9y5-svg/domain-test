import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Trash2,
  MoveUp,
  MoveDown,
  Save,
  RotateCcw,
  Eye,
  CheckCircle2,
  AlertCircle,
  Download,
  Lock,
  Unlock,
  Image as ImageIcon
} from 'lucide-react';
import { TeamMember } from '../types';
import { processUploadedImage, resetStoredTeamMembers, saveStoredTeamMembers } from '../utils/storage';

interface AdminTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  members: TeamMember[];
  onSave: (updatedMembers: TeamMember[]) => void;
}

export const AdminTeamModal: React.FC<AdminTeamModalProps> = ({
  isOpen,
  onClose,
  members,
  onSave,
}) => {
  // Authentication gate state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Editing state
  const [editableMembers, setEditableMembers] = useState<TeamMember[]>(() =>
    JSON.parse(JSON.stringify(members))
  );
  const [selectedMemberId, setSelectedMemberId] = useState<string>(members[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'edit' | 'reorder' | 'backend'>('edit');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Synchronize when opened
  React.useEffect(() => {
    if (isOpen) {
      setEditableMembers(JSON.parse(JSON.stringify(members)));
      if (members.length > 0 && !selectedMemberId) {
        setSelectedMemberId(members[0].id);
      }
    }
  }, [isOpen, members]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Authorized password for managing team
    if (passcode.trim() === 'admin2025' || passcode.trim() === 'italia2025' || passcode.trim() === 'milano') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Codice di accesso non valido. Usa il codice fornito per la gestione.');
    }
  };

  const currentMember = editableMembers.find((m) => m.id === selectedMemberId) || editableMembers[0];

  const handleUpdateCurrentField = (field: keyof TeamMember, value: any) => {
    if (!currentMember) return;
    setEditableMembers((prev) =>
      prev.map((m) => (m.id === currentMember.id ? { ...m, [field]: value } : m))
    );
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentMember) return;

    setIsProcessingImage(true);
    setStatusMessage(null);

    const result = await processUploadedImage(file, 800, 800);
    setIsProcessingImage(false);

    if (result.success && result.dataUrl) {
      handleUpdateCurrentField('photoUrl', result.dataUrl);
      setStatusMessage({
        type: 'success',
        text: `Fotografia caricata con successo per ${currentMember.name}. Clicca "Salva modifiche" per rendere permanente.`,
      });
    } else {
      setStatusMessage({
        type: 'error',
        text: result.error || 'Errore durante il caricamento dell\'immagine.',
      });
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = () => {
    if (!currentMember) return;
    handleUpdateCurrentField('photoUrl', null);
    setStatusMessage({
      type: 'success',
      text: `Fotografia rimossa per ${currentMember.name}. Verrà visualizzato il segnaposto con le iniziali.`,
    });
  };

  const handleMoveOrder = (index: number, direction: 'up' | 'down') => {
    const newMembers = [...editableMembers];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newMembers.length) return;

    const temp = newMembers[index];
    newMembers[index] = newMembers[targetIndex];
    newMembers[targetIndex] = temp;

    // Re-assign order indices
    const updated = newMembers.map((m, idx) => ({ ...m, order: idx + 1 }));
    setEditableMembers(updated);
  };

  const handleSaveChanges = () => {
    const success = saveStoredTeamMembers(editableMembers);
    if (success) {
      onSave(editableMembers);
      setStatusMessage({
        type: 'success',
        text: 'Tutte le modifiche al team sono state salvate e pubblicate con successo sul sito!',
      });
      setTimeout(() => {
        onClose();
      }, 1200);
    } else {
      setStatusMessage({
        type: 'error',
        text: 'Errore di salvataggio in memoria locale. Verifica lo spazio del browser.',
      });
    }
  };

  const handleResetToDefault = () => {
    const defaults = resetStoredTeamMembers();
    setEditableMembers(defaults);
    onSave(defaults);
    setStatusMessage({
      type: 'success',
      text: 'Dati del team ripristinati con successo alla configurazione originale autentica.',
    });
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(editableMembers, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'italia-immigrazione-team.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#0f2537] text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2ba89c]/20 border border-[#2ba89c]/40 flex items-center justify-center">
              {isAuthenticated ? <Unlock className="w-4 h-4 text-[#2ba89c]" /> : <Lock className="w-4 h-4 text-[#d4af37]" />}
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                Pannello di Amministrazione: Gestione del Team
              </h3>
              <p className="text-xs text-slate-300">
                Aggiornamento nomi, ruoli, esperienze e fotografie del personale
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200">
              <Lock className="w-8 h-8 text-[#0f2537]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-[#0f2537]">Accesso Riservato</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Inserisci il codice di sicurezza per modificare i profili e caricare le fotografie dei membri del team.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Inserisci codice (es: admin2025)"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2ba89c] text-center font-mono tracking-widest"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="text-xs text-red-600 flex items-center justify-center gap-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-800">
                <strong>Codice amministratore predefinito:</strong> <code className="font-mono font-bold">admin2025</code>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 rounded-xl bg-[#2ba89c] hover:bg-[#239287] text-white text-xs font-bold transition-colors"
                >
                  Accedi
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Main Authenticated Editor */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Sub Nav Tabs */}
            <div className="px-6 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('edit')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'edit'
                      ? 'bg-white text-[#0f2537] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Modifica Membri &amp; Foto
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reorder')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'reorder'
                      ? 'bg-white text-[#0f2537] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ordina Schede ({editableMembers.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('backend')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'backend'
                      ? 'bg-white text-[#0f2537] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Integrazione Backend &amp; Export
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  title="Ripristina dati originali"
                  className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1 px-2 py-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ripristina iniziali</span>
                </button>
                <button
                  type="button"
                  onClick={handleExportJSON}
                  title="Scarica backup JSON"
                  className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2 py-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Esporta JSON</span>
                </button>
              </div>
            </div>

            {/* Notification Banner */}
            {statusMessage && (
              <div
                className={`px-6 py-2.5 text-xs font-medium flex items-center justify-between border-b ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  )}
                  {statusMessage.text}
                </span>
                <button onClick={() => setStatusMessage(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'edit' && currentMember && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Member Selector Sidebar */}
                  <div className="lg:col-span-4 space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Seleziona Membro da modificare:
                    </label>
                    <div className="space-y-2">
                      {editableMembers.map((member, index) => {
                        const isSelected = member.id === currentMember.id;
                        return (
                          <button
                            key={member.id}
                            type="button"
                            onClick={() => setSelectedMemberId(member.id)}
                            className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                              isSelected
                                ? 'border-[#2ba89c] bg-teal-50/50 shadow-sm'
                                : 'border-slate-200 bg-white hover:bg-slate-50'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 shrink-0 flex items-center justify-center border border-slate-300">
                              {member.photoUrl ? (
                                <img
                                  src={member.photoUrl}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="font-bold text-xs text-slate-700">
                                  {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-slate-900 truncate">
                                {member.name}
                              </p>
                              <p className="text-[11px] text-slate-500 truncate">
                                {member.role}
                              </p>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono">
                              #{index + 1}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Details for Selected Member */}
                  <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-5">
                    {/* Photo Management Section */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3">
                        Fotografia Ufficiale del Membro
                      </label>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* Current Photo Preview or Initials */}
                        <div className="w-24 h-28 rounded-xl overflow-hidden bg-gradient-to-br from-[#0f2537] to-[#17635c] shrink-0 border-2 border-slate-300 flex items-center justify-center shadow-inner relative group">
                          {currentMember.photoUrl ? (
                            <img
                              src={currentMember.photoUrl}
                              alt={currentMember.photoAlt || currentMember.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-center p-2">
                              <span className="font-serif font-bold text-2xl text-[#d4af37]">
                                {currentMember.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                              </span>
                              <p className="text-[9px] text-slate-300 mt-1">Segnaposto</p>
                            </div>
                          )}
                        </div>

                        {/* Photo Controls */}
                        <div className="flex-1 space-y-2 text-center sm:text-left">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handlePhotoUpload}
                            className="hidden"
                            id="team-photo-input"
                          />

                          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                            <label
                              htmlFor="team-photo-input"
                              className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#2ba89c] hover:bg-[#239287] text-white text-xs font-bold shadow-sm transition-colors ${
                                isProcessingImage ? 'opacity-50 pointer-events-none' : ''
                              }`}
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>{currentMember.photoUrl ? 'Cambia foto' : 'Carica foto'}</span>
                            </label>

                            {currentMember.photoUrl && (
                              <button
                                type="button"
                                onClick={handleRemovePhoto}
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold border border-red-200 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Rimuovi foto</span>
                              </button>
                            )}
                          </div>

                          <p className="text-[11px] text-slate-500">
                            Supporta formati <strong>JPG, JPEG, PNG, WebP</strong>. Ottimizzazione e compressione automatica (max 8 MB). Se nessuna foto è presente, viene mostrato il monogramma con le iniziali.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Member Details Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Nome e Cognome:
                        </label>
                        <input
                          type="text"
                          value={currentMember.name}
                          onChange={(e) => handleUpdateCurrentField('name', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2ba89c]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Anni di Esperienza:
                        </label>
                        <input
                          type="number"
                          value={currentMember.experienceYears ?? ''}
                          onChange={(e) => {
                            const val = e.target.value === '' ? null : parseInt(e.target.value, 10);
                            handleUpdateCurrentField('experienceYears', val);
                            handleUpdateCurrentField(
                              'experienceLabel',
                              val ? `${val} anni di esperienza` : 'Esperienza sul campo'
                            );
                          }}
                          placeholder="Lascia vuoto se non specificata"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#2ba89c]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Ruolo Professionale:
                      </label>
                      <input
                        type="text"
                        value={currentMember.role}
                        onChange={(e) => handleUpdateCurrentField('role', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#2ba89c]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Biografia Professionale:
                      </label>
                      <textarea
                        rows={4}
                        value={currentMember.bio}
                        onChange={(e) => handleUpdateCurrentField('bio', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#2ba89c] leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Nota Breve / Specializzazione:
                      </label>
                      <input
                        type="text"
                        value={currentMember.contactDirectNote || ''}
                        onChange={(e) => handleUpdateCurrentField('contactDirectNote', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#2ba89c]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Reorder Members */}
              {activeTab === 'reorder' && (
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-xs text-slate-600">
                    Modifica l'ordine di visualizzazione delle schede del team sulla homepage:
                  </p>
                  <div className="space-y-2">
                    {editableMembers.map((member, idx) => (
                      <div
                        key={member.id}
                        className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <div>
                            <p className="font-bold text-xs text-slate-900">{member.name}</p>
                            <p className="text-[11px] text-slate-500">{member.role}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveOrder(idx, 'up')}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                            title="Sposta su"
                          >
                            <MoveUp className="w-4 h-4 text-slate-700" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === editableMembers.length - 1}
                            onClick={() => handleMoveOrder(idx, 'down')}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                            title="Sposta giù"
                          >
                            <MoveDown className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Backend & Storage Integration Docs */}
              {activeTab === 'backend' && (
                <div className="max-w-3xl mx-auto space-y-4 text-xs text-slate-700 leading-relaxed">
                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                    <h5 className="font-bold text-sm mb-1">Architettura Dati &amp; Persistenza Attiva</h5>
                    <p>
                      Attualmente i dati e le foto sono archiviati in modo persistente in <strong>LocalStorage sicuro</strong> nel browser. Qualsiasi modifica rimane salvata anche ricaricando la pagina o riavviando il browser.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h5 className="font-bold text-sm text-slate-900">Predisposizione per Backend Esterno (Firebase / Supabase)</h5>
                    <p>
                      La struttura dati <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">TeamMember</code> è già completamente conforme a Firestore o PostgreSQL (Cloud SQL/Supabase).
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>ID univoco documento / primary key</li>
                      <li>URL fotografia su Cloud Storage / Bucket con fallback a base64 Data URL</li>
                      <li>Campi testuali validati (nome, ruolo, biografia, ordine, isPublished)</li>
                      <li>Integrazione server-side real-time abilitabile senza modifiche alla UI frontend</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {editableMembers.length} membri configurati
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                >
                  Chiudi senza salvare
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#2ba89c] hover:bg-[#239287] text-white text-xs font-bold shadow-md transition-all duration-200"
                >
                  <Save className="w-4 h-4" />
                  <span>Salva &amp; Pubblica modifiche</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
