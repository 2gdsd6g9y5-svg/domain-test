export type SupportedLanguage = 'it' | 'en' | 'fr' | 'ar' | 'ur' | 'bn' | 'hi';

export type ColorTheme = 'sapphire' | 'emerald' | 'amber';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears?: number | null;
  experienceLabel?: string;
  bio: string;
  photoUrl?: string | null;
  photoAlt?: string;
  order: number;
  isPublished: boolean;
  contactDirectNote?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  details: string[];
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  contactMethod: string; // email or phone
  preferredLanguage: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
}
