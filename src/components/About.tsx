import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 sm:py-28 lg:py-32 bg-[#F9F6F0] text-[#191817] border-t border-[#E7DED4]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonna Sinistra (7 cols): Etichetta, Titolo Serif, Testo e Pulsante */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Etichetta in terracotta con tracking */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
              CHI SIAMO
            </div>

            {/* Titolo Serif */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.12] text-[#191817]">
              Ogni storia merita di essere ascoltata.
            </h2>

            {/* Paragrafi descrittivi in blu-grigio */}
            <div className="space-y-4 text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
              <p>
                Italia Immigrazione offre orientamento e supporto alle persone straniere che devono
                affrontare procedure amministrative legate alla loro permanenza in Italia.
              </p>
              <p>
                Comprendiamo che documenti, scadenze e procedure possono risultare complessi,
                soprattutto quando si parla una lingua diversa dall'italiano o si attraversa una
                situazione personale difficile.
              </p>
              <p>
                Per questo mettiamo al centro l'ascolto, la chiarezza e l'attenzione alla singola persona.
              </p>
              <p>
                Collaboriamo con avvocati specializzati in immigrazione e con traduttori e interpreti di
                diverse lingue, per aiutare ciascun cliente a comprendere la propria situazione e a
                valutare i passi successivi nel rispetto della normativa italiana.
              </p>
            </div>

            {/* Pulsante: "Scopri come lavoriamo" */}
            <div className="pt-2">
              <a
                href="#come-funziona"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-[13px] font-medium tracking-wide text-[#191817] bg-white hover:bg-[#F3ECE2] border border-[#E7DED4] hover:border-[#B45F42]/40 shadow-[0_1px_4px_rgba(25,24,23,0.03)] transition-colors rounded-sm"
              >
                <span>Scopri come lavoriamo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B45F42]" />
              </a>
            </div>
          </div>

          {/* Colonna Destra (5 cols): Fotografia dello studio */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden border border-[#E7DED4] bg-white rounded-xs shadow-[0_4px_24px_rgba(25,24,23,0.05)]">
              <img
                src="/src/assets/images/about_office_1791728911842.jpg"
                alt="Studio accogliente e riservato di Italia Immigrazione a Milano"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/[0.04]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
