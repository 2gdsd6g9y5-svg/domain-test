import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { LANGUAGES } from '../translations';

interface HeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const activeLangObj = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Come funziona', href: '#come-funziona' },
    { label: 'Cosa offriamo', href: '#cosa-offriamo' },
    { label: 'Lingue', href: '#lingue' },
    { label: 'Ufficio', href: '#ufficio' },
    { label: 'Team', href: '#team' },
  ];

  const handleConsultationClick = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const el = document.getElementById('contatti');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FCFAF6]/95 backdrop-blur-md border-[#E7DED4] shadow-[0_2px_12px_rgba(25,24,23,0.03)] py-3.5'
          : 'bg-[#FCFAF6]/90 backdrop-blur-sm border-[#E7DED4]/80 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity: Italia Immigrazione + MILANO */}
        <a href="#home" className="flex items-baseline gap-2.5 group">
          <span className="font-serif-luxury text-2xl sm:text-3xl font-medium tracking-tight text-[#191817] group-hover:text-[#B45F42] transition-colors">
            Italia Immigrazione
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#536176] uppercase">
            MILANO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#191817] hover:text-[#B45F42] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA and Language Dropdown */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#536176] hover:text-[#191817] border border-[#E7DED4] rounded-sm transition-colors bg-[#FCFAF6]"
              title="Seleziona lingua"
            >
              <Globe className="w-3.5 h-3.5 text-[#536176]" />
              <span className="font-medium uppercase">{activeLangObj.code}</span>
              <ChevronDown className="w-3 h-3 text-[#536176]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-44 bg-[#FFFFFF] border border-[#E7DED4] shadow-md py-1.5 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-[#FCFAF6] transition-colors ${
                      currentLanguage === lang.code
                        ? 'text-[#B45F42] font-semibold bg-[#FCFAF6]'
                        : 'text-[#191817]'
                    }`}
                  >
                    <span>{lang.name}</span>
                    <span className="text-[10px] text-[#536176] uppercase font-mono">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Terracotta Primary CTA: "Consulenza gratuita" */}
          <button
            type="button"
            onClick={handleConsultationClick}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-wide text-white bg-[#B45F42] hover:bg-[#9E5136] transition-colors duration-200 rounded-sm"
          >
            Consulenza gratuita
          </button>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex sm:hidden items-center gap-2.5">
          <button
            type="button"
            onClick={handleConsultationClick}
            className="px-3 py-1.5 text-[11px] font-medium text-white bg-[#B45F42] rounded-sm"
          >
            Consulenza
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#191817] hover:text-[#B45F42] transition-colors"
            aria-label="Apri menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFAF6] border-b border-[#E7DED4] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#191817] hover:text-[#B45F42] py-1 border-b border-[#E7DED4]/50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between border-t border-[#E7DED4]">
            <span className="text-xs text-[#536176]">Lingua:</span>
            <div className="flex gap-2 flex-wrap">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs rounded-sm border ${
                    currentLanguage === lang.code
                      ? 'border-[#B45F42] text-[#B45F42] font-semibold bg-white'
                      : 'border-[#E7DED4] text-[#536176] bg-white'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
