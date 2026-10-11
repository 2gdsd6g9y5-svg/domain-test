import React from 'react';
import { Heart, Lock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsContext: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#f3efe6] text-slate-800 border-t border-[#e5dfd2]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c59a4c]/10 border border-[#c59a4c]/30 text-xs font-bold text-[#9e742e] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c59a4c]" />
            <span>Fiducia &amp; Riservatezza</span>
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Le esperienze di chi si è rivolto a noi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Un approccio fondato sull'ascolto autentico, sulla riservatezza e sul rispetto della persona.
          </p>
        </div>

        {/* 3 Redesigned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#e6e0d4] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#c59a4c]/60">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-[#c59a4c]/15 border border-[#c59a4c]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-[#9e742e]" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-slate-900">
                Ascolto senza pregiudizi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Chi si rivolge a noi spesso si trova ad affrontare momenti di apprensione legati a scadenze, timori o incertezze normative. Dedichiamo tutto il tempo necessario ad ascoltare con empatia e rispetto.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#f2ede4] text-xs text-[#9e742e] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c59a4c]" />
              <span>Principio cardine di accoglienza</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border border-[#e6e0d4] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#18545e]/60">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-[#18545e]/15 border border-[#18545e]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 text-[#18545e]" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-slate-900">
                Riservatezza assoluta
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Tutte le informazioni condivise, i documenti personali e i racconti individuali sono trattati nel massimo rispetto della privacy e del segreto professionale con i legali collaboratori.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#f2ede4] text-xs text-[#18545e] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#18545e]" />
              <span>Tutela GDPR &amp; Segreto fiduciario</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-[#e6e0d4] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#c59a4c]/60">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-[#c59a4c]/15 border border-[#c59a4c]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#9e742e]" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-slate-900">
                Trasparenza etica
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Non pubblichiamo recensioni artefatte o promesse di esiti facili. Crediamo che la reputazione si costruisca giorno per giorno attraverso la precisione, la disponibilità e la correttezza verso ogni cliente.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#f2ede4] text-xs text-[#9e742e] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c59a4c]" />
              <span>Politica di integrità professionale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
