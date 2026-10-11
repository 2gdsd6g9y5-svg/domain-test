import React, { useState, useEffect } from 'react';
import { Type, Check } from 'lucide-react';

export interface FontPreset {
  id: string;
  name: string;
  headingFont: string;
  bodyFont: string;
  description: string;
}

export const FONT_PRESETS: FontPreset[] = [
  {
    id: 'fraunces',
    name: 'Fraunces',
    headingFont: 'Fraunces (400–600)',
    bodyFont: 'Inter (300–600)',
    description: 'Serif moderno ed espressivo con sans-serif pulito e leggibile',
  },
  {
    id: 'dm-serif',
    name: 'DM Serif Display',
    headingFont: 'DM Serif Display',
    bodyFont: 'Plus Jakarta Sans',
    description: 'Editoriale contemporaneo, caldo e autorevole',
  },
  {
    id: 'playfair',
    name: 'Playfair Display',
    headingFont: 'Playfair Display',
    bodyFont: 'Manrope',
    description: 'Elegante, prestigioso e istituzionale',
  },
  {
    id: 'plus-jakarta',
    name: 'Fraunces + Jakarta',
    headingFont: 'Fraunces',
    bodyFont: 'Plus Jakarta Sans',
    description: 'Titoli serif Fraunces con testo geometrico Plus Jakarta',
  },
];

export const FontSwitcher: React.FC = () => {
  const [currentFont, setCurrentFont] = useState<string>(() => {
    return localStorage.getItem('italia_immigrazione_font_v3') || 'fraunces';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', currentFont);
    localStorage.setItem('italia_immigrazione_font_v3', currentFont);
  }, [currentFont]);

  const activePreset = FONT_PRESETS.find((p) => p.id === currentFont) || FONT_PRESETS[0];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <div className="relative">
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#E7DED4] text-[#191817] shadow-sm hover:border-[#B45F42] hover:shadow-md transition-all duration-200 text-xs font-medium group"
          aria-label="Cambia stile del font"
          title="Cambia combinazione di caratteri tipografici"
        >
          <Type className="w-3.5 h-3.5 text-[#B45F42] group-hover:scale-110 transition-transform" />
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#536176] group-hover:text-[#191817]">
            Font:
          </span>
          <span className="font-semibold text-[12px] text-[#191817]">
            {activePreset.headingFont}
          </span>
        </button>

        {/* Modal / Popover */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute bottom-12 left-0 z-50 w-80 bg-[#FCFAF6] border border-[#E7DED4] rounded-lg shadow-xl p-4 text-[#191817] animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7DED4]">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#B45F42]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#191817]">
                    Scegli lo Stile dei Font
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-[#536176] hover:text-[#191817]"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                {FONT_PRESETS.map((preset) => {
                  const isSelected = preset.id === currentFont;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setCurrentFont(preset.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-md border transition-all duration-150 ${
                        isSelected
                          ? 'border-[#B45F42] bg-[#B45F42]/5 ring-1 ring-[#B45F42]'
                          : 'border-[#E7DED4] bg-white hover:border-[#B45F42]/50 hover:bg-[#FCFAF6]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-base font-normal text-[#191817]"
                          style={{
                            fontFamily:
                              preset.id === 'fraunces' || preset.id === 'plus-jakarta'
                                ? "'Fraunces', Georgia, serif"
                                : preset.id === 'dm-serif'
                                ? "'DM Serif Display', Georgia, serif"
                                : "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {preset.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#B45F42]" />}
                      </div>
                      <div className="text-[11px] text-[#536176] leading-tight">
                        Titoli in {preset.headingFont} + Testo in {preset.bodyFont}
                      </div>
                      <div className="text-[10px] text-[#536176]/80 mt-1 italic">
                        {preset.description}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#E7DED4] text-[10px] text-[#536176] text-center">
                Il font selezionato viene applicato istantaneamente a tutto il sito.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
