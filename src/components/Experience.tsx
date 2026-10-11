import React from 'react';
import { Award, Briefcase, FileCheck, Shield, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="cosa-offriamo" className="py-20 sm:py-28 lg:py-32 bg-[#F9F6F0] text-[#191817] border-t border-[#E7DED4]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonna Sinistra (5 cols): Grande numero 22 e qualifica deontologica */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
              COSA OFFRIAMO &amp; COMPETENZE
            </div>

            <div className="flex items-baseline gap-4">
              <span className="font-serif-luxury text-7xl sm:text-8xl font-normal text-[#191817] leading-none">
                22
              </span>
              <div>
                <span className="text-xl sm:text-2xl font-serif-luxury text-[#B45F42] block font-normal">
                  ANNI
                </span>
                <span className="text-xs text-[#536176] uppercase tracking-wider block font-medium">
                  di esperienza legale
                </span>
              </div>
            </div>

            <p className="text-sm text-[#536176] leading-relaxed">
              Il dato dei 22 anni si riferisce all'esperienza dichiarata dell'avvocata <strong>Annalisa Rottola</strong> nel settore dell'immigrazione e dei rapporti con le autorità competenti.
            </p>

            <div className="pt-2 space-y-3 text-xs text-[#536176]">
              <div className="flex items-center gap-2.5 py-2 border-b border-[#E7DED4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45F42]" />
                <span>Approfondita conoscenza delle procedure e prassi di Questura e Prefettura</span>
              </div>
              <div className="flex items-center gap-2.5 py-2 border-b border-[#E7DED4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45F42]" />
                <span>Collaborazione con avvocati abilitati ed esperti di diritto dell'immigrazione</span>
              </div>
              <div className="flex items-center gap-2.5 py-2 border-b border-[#E7DED4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45F42]" />
                <span>Supporto linguistico dedicato in 7 lingue (incluso Hindi, Arabo, Francese, Urdu e Bengalese)</span>
              </div>
            </div>
          </div>

          {/* Colonna Destra (7 cols): Spiegazione editoriale e principi deontologici */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
              Chiarezza, serietà e percorsi conformi alla legge.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
              <p>
                Per affrontare correttamente le procedure di immigrazione è fondamentale comprendere le regole applicabili e seguire con precisione i passaggi previsti dalla legge italiana.
              </p>
              <p>
                Collaboriamo con professionisti legali che vantano oltre due decenni di esperienza specifica nel diritto dell'immigrazione e nella cittadinanza, garantendo un'analisi meticolosa delle singole situazioni amministrative.
              </p>
              <p>
                Il nostro impegno è fornire a ciascuna persona una valutazione trasparente, senza alimentare false aspettative e indicando con onestà i requisiti, i tempi e i documenti realmente necessari.
              </p>
            </div>

            {/* Tre punti chiave */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E7DED4]">
              <div>
                <h4 className="font-serif-luxury text-lg text-[#191817] mb-1 font-normal">Ascolto dedicato</h4>
                <p className="text-xs text-[#536176] leading-relaxed">Tempo e attenzione per comprendere a fondo ogni singolo caso.</p>
              </div>
              <div>
                <h4 className="font-serif-luxury text-lg text-[#191817] mb-1 font-normal">Trasparenza etica</h4>
                <p className="text-xs text-[#536176] leading-relaxed">Nessuna promessa di esiti garantiti: solo percorsi previsti dalla legge.</p>
              </div>
              <div>
                <h4 className="font-serif-luxury text-lg text-[#191817] mb-1 font-normal">Assistenza multilingue</h4>
                <p className="text-xs text-[#536176] leading-relaxed">Dialogo nella propria lingua materna tramite interpreti dedicati.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
