import React from 'react';
import {
  FileText,
  RefreshCw,
  ShieldAlert,
  HeartHandshake,
  Scale,
  Languages,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { OFFICE_INFO } from '../data/initialData';

interface ServicesProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const servicesList = [
    {
      num: '01',
      title: 'Permessi di soggiorno',
      text: 'Orientamento sulle procedure relative ai permessi di soggiorno, sui documenti necessari e sui passaggi amministrativi da approfondire.',
      icon: FileText
    },
    {
      num: '02',
      title: 'Rinnovi e aggiornamenti',
      text: "Supporto nell'organizzazione della documentazione e nell'orientamento sulle procedure di rinnovo e aggiornamento.",
      icon: RefreshCw
    },
    {
      num: '03',
      title: 'Situazioni di irregolarità',
      text: 'Ascolto riservato e orientamento per persone senza un valido titolo di soggiorno o con situazioni amministrative complesse. Con i professionisti legali collaboratori, aiutiamo a verificare quali opzioni previste dalla legge possano essere applicabili.',
      icon: ShieldAlert
    },
    {
      num: '04',
      title: 'Sfruttamento lavorativo',
      text: 'Orientamento per persone straniere che subiscono sfruttamento, abusi o condizioni lavorative ingiuste, con indicazioni sui possibili percorsi di tutela e sui servizi competenti.',
      icon: HeartHandshake
    },
    {
      num: '05',
      title: 'Assistenza legale tramite avvocati collaboratori',
      text: "Collaboriamo con avvocati esperti in immigrazione per l'esame delle questioni giuridiche e per l'individuazione delle possibili soluzioni previste dalla normativa.",
      icon: Scale
    },
    {
      num: '06',
      title: 'Traduzioni e interpreti',
      text: 'Facilitiamo la comunicazione grazie alla collaborazione con traduttori e interpreti di diverse lingue.',
      icon: Languages
    },
    {
      num: '07',
      title: 'Ricongiungimento familiare',
      text: 'Orientamento sui requisiti e sulle procedure relative al ricongiungimento familiare, in base alla situazione individuale.',
      icon: Users
    },
    {
      num: '08',
      title: 'Orientamento personalizzato',
      text: 'Un primo confronto per comprendere le esigenze della persona, raccogliere le informazioni iniziali e individuare i passaggi da approfondire.',
      icon: Compass
    }
  ];

  const handleServiceClick = (title: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(title);
    }
    const el = document.getElementById('contatti');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servizi" className="py-20 sm:py-28 lg:py-32 bg-[#FCFAF6] text-[#191817] border-t border-[#E7DED4]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Sezione */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
            I NOSTRI SERVIZI
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
            Un supporto concreto per il tuo percorso in Italia.
          </h2>
          <p className="text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
            Ogni situazione è diversa. Ti aiutiamo a comprendere le procedure pertinenti e, quando
            necessario, a entrare in contatto con professionisti qualificati.
          </p>
        </div>

        {/* Griglia editoriale dei servizi con divisori sottili beige */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="flex flex-col justify-between pt-6 border-t border-[#E7DED4] group hover:border-[#B45F42] transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[#536176]">
                      {service.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#B45F42]" />
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#191817] group-hover:text-[#B45F42] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#536176] leading-relaxed font-normal">
                    {service.text}
                  </p>
                </div>

                <div className="pt-6 mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.title)}
                    className="text-xs font-medium text-[#B45F42] hover:text-[#9E5136] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Richiedi info</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <span className="text-[#E7DED4]">•</span>

                  <a
                    href={`https://wa.me/393532136704?text=${encodeURIComponent(
                      `Buongiorno, vorrei informazioni sul servizio "${service.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#536176] hover:text-[#191817]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota di chiarezza deontologica */}
        <div className="mt-16 pt-8 border-t border-[#E7DED4] text-xs text-[#536176] text-center max-w-2xl mx-auto">
          I percorsi sono valutati caso per caso nel rispetto della normativa italiana vigente. Non vengono promessi esiti legali garantiti o tempi certi di approvazione.
        </div>
      </div>
    </section>
  );
};
