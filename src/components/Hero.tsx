import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { OFFICE_INFO } from '../data/initialData';

interface HeroProps {
  currentLanguage: SupportedLanguage;
  onQuickNeedSelect?: (need: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 bg-[#FCFAF6] text-[#191817] overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Colonna Sinistra (7 cols): Etichetta, Titolo Serif gigante, Paragrafo, 2 Pulsanti, Nota */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-6 sm:space-y-8 pt-2 lg:pt-6">
            {/* Etichetta in terracotta, maiuscola e con spaziatura tra le lettere */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
              ASSISTENZA E ORIENTAMENTO IN MATERIA DI IMMIGRAZIONE — MILANO
            </div>

            {/* Titolo principale serif molto grande, su due o tre righe */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-[#191817]">
              Il tuo futuro in Italia, con il giusto supporto.
            </h1>

            {/* Paragrafo descrittivo in blu-grigio */}
            <p className="text-base sm:text-lg text-[#536176] leading-relaxed max-w-2xl font-normal">
              Ti aiutiamo a comprendere le procedure di immigrazione in Italia, a organizzare la
              documentazione e a individuare i percorsi più adatti alla tua situazione. Collaboriamo
              con avvocati esperti in materia di immigrazione e con traduttori multilingue, per
              ascoltarti e accompagnarti nella tua lingua.
            </p>

            {/* Due pulsanti affiancati */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs sm:text-[13px] font-medium tracking-wide text-white bg-[#B45F42] hover:bg-[#9E5136] shadow-[0_2px_10px_rgba(180,95,66,0.2)] hover:shadow-[0_4px_16px_rgba(180,95,66,0.3)] transition-all duration-200 rounded-sm text-center"
              >
                Richiedere una consulenza gratuita
              </a>

              <a
                href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-[13px] font-medium tracking-wide text-[#191817] bg-white/80 hover:bg-[#F3ECE2] border border-[#E7DED4] hover:border-[#B45F42]/50 transition-colors duration-200 rounded-sm text-center shadow-[0_1px_4px_rgba(25,24,23,0.03)]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B45F42]" />
                <span>Chiamare +39 353 213 6704</span>
              </a>
            </div>

            {/* Breve nota sotto i pulsanti */}
            <p className="text-xs text-[#536176] max-w-xl leading-relaxed pt-1">
              Il primo contatto è dedicato all'ascolto della tua situazione e all'orientamento sui possibili passi successivi.
            </p>
          </div>

          {/* Colonna Destra (5 cols): Grande fotografia verticale (4:5) + Elemento editoriale sotto */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Fotografia verticale 4:5 con bordo sottile beige e cornice editoriale */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E7DED4] bg-white rounded-xs shadow-[0_4px_24px_rgba(25,24,23,0.05)]">
              <img
                src="/src/assets/images/hero_consultation_1791728896181.jpg"
                alt="Consulenza professionale e accogliente per immigrazione a Milano"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/[0.04]" />
            </div>

            {/* Sotto la fotografia: linea verticale terracotta, titolo serif e testo descrittivo */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-[3px] self-stretch bg-gradient-to-b from-[#B45F42] to-[#CA7458] rounded-full shrink-0 min-h-[4rem]" />
              <div className="space-y-1.5">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#191817] leading-snug">
                  Esperienza, ascolto e assistenza multilingue
                </h3>
                <p className="text-xs sm:text-[13px] text-[#536176] leading-relaxed">
                  Collaborazione con professionisti legali, orientamento sulle procedure di
                  immigrazione e supporto linguistico per persone di diverse nazionalità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
