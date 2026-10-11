import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Ci racconti la tua situazione',
      text: 'Ci contatti tramite WhatsApp, telefono, email o appuntamento in ufficio.',
    },
    {
      num: '02',
      title: 'Ti ascoltiamo nella tua lingua',
      text: 'Raccogliamo le informazioni iniziali e organizziamo, quando disponibile, il supporto di un traduttore o interprete.',
    },
    {
      num: '03',
      title: 'Valutiamo le possibili opzioni',
      text: 'Ti aiutiamo a comprendere i passaggi amministrativi e, se necessario, coinvolgiamo avvocati collaboratori per la valutazione legale.',
    },
    {
      num: '04',
      title: 'Ti accompagniamo nei passaggi successivi',
      text: 'Spieghiamo quali documenti preparare e come procedere con gli uffici competenti o i professionisti incaricati.',
    },
  ];

  return (
    <section id="come-funziona" className="py-20 sm:py-28 lg:py-32 bg-[#FCFAF6] text-[#191817] border-t border-[#E7DED4]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Sezione */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
            IL NOSTRO METODO
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
            Quattro passaggi, con attenzione alla tua situazione.
          </h2>
          <p className="text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
            Un percorso chiaro e trasparente per orientarsi con serenità tra le procedure.
          </p>
        </div>

        {/* 4 passaggi orizzontali/griglia pulita con numerazione 01-04 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="pt-6 border-t border-[#E7DED4] hover:border-[#B45F42] transition-colors duration-300 space-y-4 group"
            >
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#B45F42] block transition-transform duration-300 group-hover:-translate-y-0.5">
                {step.num}
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#191817] leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#536176] leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
