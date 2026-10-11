import React from 'react';
import { X, Shield, Lock, FileText } from 'lucide-react';
import { OFFICE_INFO } from '../data/initialData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cookie';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0f2537] text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#2ba89c]" />
            <h3 className="font-bold text-base sm:text-lg">
              {type === 'privacy' ? 'Informativa sulla Privacy (GDPR)' : 'Informativa sui Cookie'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-800">Titolare del Trattamento:</p>
                <p>{OFFICE_INFO.name} • {OFFICE_INFO.address}</p>
                <p>Email: {OFFICE_INFO.email} • Tel: {OFFICE_INFO.phone}</p>
              </div>

              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Finalità del trattamento</h4>
              <p>
                I dati raccolti tramite i moduli di contatto, messaggi WhatsApp, telefonate o incontri presso la nostra sede sono trattati esclusivamente per fornire le informazioni e l'orientamento richiesti in materia di immigrazione e pratiche amministrative in Italia.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Riservatezza e collaborazione con legali</h4>
              <p>
                Italia Immigrazione adotta rigorose misure di sicurezza per proteggere la riservatezza delle informazioni. Nel caso in cui il cliente richieda una consulenza legale approfondita, i dati potranno essere condivisi con gli avvocati convenzionati esclusivamente previo esplicito accordo del cliente e nei limiti dell'incarico.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Conservazione e diritti dell'interessato</h4>
              <p>
                Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l'utente ha diritto di richiedere in qualsiasi momento l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei propri dati inviando una comunicazione all'indirizzo email <a href={`mailto:${OFFICE_INFO.email}`} className="text-[#2ba89c] underline">{OFFICE_INFO.email}</a>.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-slate-900 text-sm">Utilizzo dei Cookie Tecnici</h4>
              <p>
                Questo sito web utilizza esclusivamente cookie tecnici essenziali e memorie di sessione necessarie al corretto funzionamento della navigazione, alla memorizzazione delle preferenze linguistiche e alla gestione del tema visivo.
              </p>
              <p>
                Non vengono impiegati cookie di profilazione commerciale invasivi né strumenti di tracciamento di terze parti senza previa informativa. L'utente può gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser web in qualunque momento.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0f2537] hover:bg-[#183955] text-white text-xs font-semibold transition-colors"
          >
            Ho compreso
          </button>
        </div>
      </div>
    </div>
  );
};
