import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send
} from 'lucide-react';
import { OFFICE_INFO } from '../data/initialData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialSubject?: string;
  initialLanguage?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialSubject = '',
  initialLanguage = 'Italiano'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    contactMethod: '',
    preferredLanguage: initialLanguage,
    subject: initialSubject || 'Orientamento generale immigrazione',
    message: '',
    privacyConsent: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Inserisci il tuo nome completo.';
    }

    if (!formData.contactMethod.trim()) {
      errors.contactMethod = 'Inserisci un recapito (email o telefono).';
    } else {
      const isEmail = formData.contactMethod.includes('@');
      const isPhone = /[0-9+\s-]{6,}/.test(formData.contactMethod);
      if (!isEmail && !isPhone) {
        errors.contactMethod = 'Inserisci un indirizzo email valido o un numero di telefono.';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Inserisci una descrizione di almeno 10 caratteri.';
    }

    if (!formData.privacyConsent) {
      errors.privacyConsent = 'È necessario accettare il trattamento dei dati personali.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(OFFICE_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(OFFICE_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contatti" className="py-20 sm:py-28 lg:py-32 bg-[#F9F6F0] text-[#191817] border-t border-[#E7DED4]">
      {/* Sede e Ufficio anchor link */}
      <div id="ufficio" className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonna Sinistra (5 cols): Recapiti, Sede, Orari, Mappa Google */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B45F42] uppercase">
                CONTATTI &amp; UFFICIO
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#191817]">
                Siamo qui per ascoltarti.
              </h2>
              <p className="text-base text-[#536176] font-normal leading-relaxed">
                Il nostro ufficio a Milano accoglie su appuntamento. Puoi contattarci per telefono,
                WhatsApp o compilando il modulo.
              </p>
            </div>

            {/* Recapiti diretti */}
            <div className="space-y-4 pt-2">
              {/* Indirizzo */}
              <div className="p-5 border border-[#E7DED4] bg-white flex items-start justify-between rounded-xs">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#B45F42] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#191817] uppercase tracking-wider">
                      Ufficio di Milano
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#536176] mt-0.5">
                      {OFFICE_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#536176] mt-1">
                      Metro M2 Piola / Lambrate FS
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="p-1.5 text-[#536176] hover:text-[#191817] transition-colors"
                  title="Copia indirizzo"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-[#B45F42]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Telefono */}
              <div className="p-5 border border-[#E7DED4] bg-white flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-3.5">
                  <Phone className="w-4 h-4 text-[#B45F42] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#191817] uppercase tracking-wider">
                      Recapito Telefonico
                    </h4>
                    <a
                      href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-[13px] text-[#536176] hover:text-[#B45F42] font-medium transition-colors"
                    >
                      {OFFICE_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 text-[#536176] hover:text-[#191817] transition-colors"
                  title="Copia numero"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#B45F42]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-[#E7DED4] bg-white flex items-center justify-between hover:border-[#B45F42] transition-colors rounded-xs group"
              >
                <div className="flex items-center gap-3.5">
                  <MessageCircle className="w-4 h-4 text-[#B45F42] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#191817] uppercase tracking-wider">
                      Messaggio WhatsApp
                    </h4>
                    <span className="text-xs sm:text-[13px] text-[#536176] group-hover:text-[#191817]">
                      Scrivici per una risposta rapida
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#536176] group-hover:text-[#B45F42]" />
              </a>

              {/* Email */}
              <div className="p-5 border border-[#E7DED4] bg-white flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-3.5">
                  <Mail className="w-4 h-4 text-[#B45F42] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#191817] uppercase tracking-wider">
                      Posta Elettronica
                    </h4>
                    <a
                      href={`mailto:${OFFICE_INFO.email}`}
                      className="text-xs sm:text-[13px] text-[#536176] hover:text-[#B45F42] transition-colors"
                    >
                      {OFFICE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="p-5 border border-[#E7DED4] bg-white flex items-center gap-3.5 rounded-xs">
                <Clock className="w-4 h-4 text-[#B45F42] shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-[#191817] uppercase tracking-wider">
                    Orari di Apertura
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#536176] mt-0.5">
                    {OFFICE_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="border border-[#E7DED4] bg-white p-2 rounded-xs">
              <iframe
                title="Mappa Ufficio Italia Immigrazione Milano"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4045580665476!2d9.2274!3d45.4851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ee815349f7%3A0x600f14fa7dc8332a!2sVia%20Andrea%20Maria%20Amp%C3%A8re%2C%20126%2C%2020131%20Milano%20MI!5e0!3m2!1sit!2sit!4v1680000000000!5m2!1sit!2sit"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>

          {/* Colonna Destra (7 cols): Modulo di Richiesta Orientamento */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 border border-[#E7DED4] rounded-xs">
            <div className="mb-8 space-y-2">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#191817]">
                Richiedi una consulenza di orientamento
              </h3>
              <p className="text-xs sm:text-sm text-[#536176]">
                Compila i campi sottostanti. Il primo contatto è dedicato all'ascolto della tua situazione.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 border border-[#B45F42] bg-[#FCFAF6] text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#B45F42] text-white flex items-center justify-center font-serif-luxury text-xl">
                  ✓
                </div>
                <h4 className="font-serif-luxury text-2xl text-[#191817]">
                  Richiesta inviata con successo
                </h4>
                <p className="text-xs sm:text-sm text-[#536176] max-w-md mx-auto">
                  Grazie {formData.fullName}. Abbiamo ricevuto la tua richiesta e ti ricontatteremo a breve al recapito indicato ({formData.contactMethod}).
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        fullName: '',
                        contactMethod: '',
                        preferredLanguage: initialLanguage,
                        subject: 'Orientamento generale immigrazione',
                        message: '',
                        privacyConsent: false
                      });
                    }}
                    className="px-5 py-2 text-xs font-medium text-[#191817] border border-[#E7DED4] hover:bg-white transition-colors"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome completo */}
                <div>
                  <label className="block text-xs font-medium text-[#191817] uppercase tracking-wider mb-1.5">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Es. Mario Rossi"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCFAF6] border border-[#E7DED4] focus:border-[#B45F42] focus:outline-none transition-colors"
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-[#B45F42] mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Recapito */}
                <div>
                  <label className="block text-xs font-medium text-[#191817] uppercase tracking-wider mb-1.5">
                    Recapito Telefonico o Email *
                  </label>
                  <input
                    type="text"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    placeholder="Es. +39 333 1234567 oppure nome@esempio.it"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCFAF6] border border-[#E7DED4] focus:border-[#B45F42] focus:outline-none transition-colors"
                  />
                  {formErrors.contactMethod && (
                    <p className="text-[11px] text-[#B45F42] mt-1">{formErrors.contactMethod}</p>
                  )}
                </div>

                {/* Lingua preferita e Argomento in due colonne */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#191817] uppercase tracking-wider mb-1.5">
                      Lingua Preferita
                    </label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCFAF6] border border-[#E7DED4] focus:border-[#B45F42] focus:outline-none transition-colors"
                    >
                      <option value="Italiano">Italiano</option>
                      <option value="English">English</option>
                      <option value="Français">Français</option>
                      <option value="العربية">العربية (Arabo)</option>
                      <option value="اردو">اردو (Urdu)</option>
                      <option value="বাংলা">বাংলা (Bengalese)</option>
                      <option value="हिन्दी">हिन्दी (Hindi)</option>
                      <option value="Altra">Altra lingua</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#191817] uppercase tracking-wider mb-1.5">
                      Argomento della richiesta
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Es. Permesso di soggiorno"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCFAF6] border border-[#E7DED4] focus:border-[#B45F42] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Messaggio */}
                <div>
                  <label className="block text-xs font-medium text-[#191817] uppercase tracking-wider mb-1.5">
                    Descrivi brevemente la tua situazione *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descrivi la tua richiesta, i documenti posseduti o le scadenze importanti..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCFAF6] border border-[#E7DED4] focus:border-[#B45F42] focus:outline-none transition-colors resize-y"
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-[#B45F42] mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Consenso Privacy */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#536176]">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-0.5 rounded-none border-[#E7DED4] text-[#B45F42] focus:ring-0"
                    />
                    <span>
                      Dichiaro di aver preso visione dell'informativa privacy e acconsento al trattamento dei dati personali per la gestione della richiesta di contatto (art. 13 Reg. UE 2016/679).
                    </span>
                  </label>
                  {formErrors.privacyConsent && (
                    <p className="text-[11px] text-[#B45F42] mt-1">{formErrors.privacyConsent}</p>
                  )}
                </div>

                {/* Pulsante Submit Terracotta */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs sm:text-[13px] font-medium tracking-wide text-white bg-[#B45F42] hover:bg-[#9E5136] transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Invio in corso...' : 'Invia richiesta di consulenza'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
