import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { OFFICE_INFO } from '../data/initialData';
import { PrivacyModal } from './PrivacyModal';

interface FooterProps {
  onOpenAdminTeam: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminTeam }) => {
  const [modalType, setModalType] = useState<'privacy' | 'cookie' | null>(null);

  const quickLinks = [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Come funziona', href: '#come-funziona' },
    { label: 'Cosa offriamo', href: '#cosa-offriamo' },
    { label: 'Lingue', href: '#lingue' },
    { label: 'Ufficio', href: '#ufficio' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <footer className="bg-[#191817] text-[#FCFAF6] pt-16 pb-12 border-t border-[#E7DED4]/20">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Colonna 1: Brand & Identità (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif-luxury text-2xl font-normal tracking-tight text-white">
                Italia Immigrazione
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#E7DED4] uppercase">
                MILANO
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-md font-light">
              Orientamento e assistenza nelle procedure di immigrazione in Italia. Collaborazione con professionisti legali ed esperti linguistici per offrire risposte chiare, riservate e conformi alla legge.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1.5 text-[#B45F42]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Riservatezza e deontologia</span>
              </span>
              <span>•</span>
              <span>Via Ampère 126, Milano</span>
            </div>
          </div>

          {/* Colonna 2: Link Navigazione (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Menu Principale
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3: Sede & Contatti (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Sede di Milano
            </h4>
            <div className="space-y-2 text-xs sm:text-[13px] text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B45F42] shrink-0 mt-0.5" />
                <span>{OFFICE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B45F42] shrink-0" />
                <a href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {OFFICE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#B45F42] shrink-0" />
                <a
                  href={OFFICE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +39 353 213 6704
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B45F42] shrink-0" />
                <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors">
                  {OFFICE_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Riga inferiore: Diritti, Note legali & Gestione Team */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Italia Immigrazione. Tutti i diritti riservati.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalType('cookie')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenAdminTeam}
              className="hover:text-[#B45F42] transition-colors"
            >
              Area Riservata Team
            </button>
          </div>
        </div>
      </div>

      <PrivacyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </footer>
  );
};
