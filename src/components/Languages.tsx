import React from 'react';
import { MessageCircle, Globe, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { LANGUAGES } from '../translations';
import { OFFICE_INFO } from '../data/initialData';

interface LanguagesProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenContactForLanguage?: (langName: string) => void;
}

export const Languages: React.FC<LanguagesProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenContactForLanguage
}) => {
  const languageCards = [
    { code: 'it', name: 'Italiano', local: 'Italiano', desc: 'Comunicazione fluida e diretta per chiarire ogni termine burocratico e normativo.' },
    { code: 'en', name: 'Inglese', local: 'English', desc: 'Full consultation and guidance for international professionals, workers and families.' },
    { code: 'fr', name: 'Francese', local: 'Français', desc: 'Orientation et accompagnement administratif pour les personnes francophones.' },
    { code: 'ar', name: 'Arabo', local: 'العربية', desc: 'دعم وتوجيه كامل باللغة العربية الفصحى واللهجات (المصرية والمغربية).' },
    { code: 'ur', name: 'Urdu', local: 'اردو', desc: 'اردو زبان میں مکمل رہنمائی، دستاویزات کی جانچ اور قانونی امور کی سمجھ بوجھ۔' },
    { code: 'bn', name: 'Bengalese', local: 'বাংলা', desc: 'আপনার মাতৃভাষায় ইতালি অভিবাসন সংক্রান্ত তথ্য, পরামর্শ ও সার্বিক সহায়তা।' },
    { code: 'hi', name: 'Hindi', local: 'हिन्दी', desc: 'इटली में आप्रवासन, वीज़ा और निवास परमिट प्रक्रियाओं के लिए आपकी मातृभाषा में मार्गदर्शन।' },
  ];

  const handleSelect = (code: string, name: string) => {
    onLanguageChange(code as SupportedLanguage);
    if (onOpenContactForLanguage) {
      onOpenContactForLanguage(name);
    }
  };

  return (
    <section id="lingue" className="py-20 sm:py-28 lg:py-32 bg-[#F9F6F0] text-[#191817] border-t border-[#E7DED4]">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Sezione */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
            ASSISTENZA LINGUISTICA MULTILINGUE
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
            Ti ascoltiamo nella tua lingua madre.
          </h2>
          <p className="text-base sm:text-lg text-[#536176] font-normal leading-relaxed">
            La comprensione delle pratiche di immigrazione richiede chiarezza assoluta. Collaboriamo con traduttori e interpreti dedicati (incluso arabo classico, egiziano, marocchino, francese, urdu, bengalese e hindi) per garantire un dialogo limpido e senza barriere.
          </p>
        </div>

        {/* Griglia lingue in stile editoriale con bordi sottili beige */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {languageCards.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <div
                key={lang.code}
                onClick={() => handleSelect(lang.code, lang.name)}
                className={`p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between bg-white rounded-xs ${
                  isSelected
                    ? 'border-[#B45F42] shadow-xs'
                    : 'border-[#E7DED4] hover:border-[#B45F42]/60'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-[#B45F42] uppercase">
                      {lang.name}
                    </span>
                    <span className="font-serif-luxury text-lg text-[#536176]">
                      {lang.local}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#536176] leading-relaxed">
                    {lang.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E7DED4] flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-[#B45F42] font-semibold' : 'text-[#536176]'}>
                    {isSelected ? 'Lingua attiva nel sito' : 'Attiva lingua'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B45F42]' : 'text-[#536176]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottone rapido WhatsApp multilingue */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 border border-[#E7DED4] bg-white gap-4">
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#191817]">
              Hai bisogno di assistenza immediata nella tua lingua?
            </h4>
            <p className="text-xs sm:text-sm text-[#536176]">
              Inviaci un messaggio indicando la lingua con cui preferisci comunicare.
            </p>
          </div>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-[13px] font-medium text-white bg-[#B45F42] hover:bg-[#9E5136] transition-colors rounded-sm shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Scrivici su WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
