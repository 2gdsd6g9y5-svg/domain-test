import React from 'react';
import { MessageCircle } from 'lucide-react';
import { OFFICE_INFO } from '../data/initialData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Supporto WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#B45F42] hover:bg-[#9E5136] text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-sm group"
        title="Parla con noi su WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
