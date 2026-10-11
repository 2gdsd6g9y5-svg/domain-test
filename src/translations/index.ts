import { SupportedLanguage } from '../types';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', flag: '🇮🇹', direction: 'ltr' },
  { code: 'en', name: 'Inglese', nativeName: 'English', flag: '🇬🇧', direction: 'ltr' },
  { code: 'fr', name: 'Francese', nativeName: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'ar', name: 'Arabo', nativeName: 'العربية', flag: '🇲🇦', direction: 'rtl' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', direction: 'rtl' },
  { code: 'bn', name: 'Bengalese', nativeName: 'বাংলা', flag: '🇧🇩', direction: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', direction: 'ltr' },
];

export const UI_TRANSLATIONS: Record<SupportedLanguage, {
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSubPhrase: string;
  talkWhatsApp: string;
  exploreServices: string;
  requestAssistance: string;
  navHome: string;
  navAbout: string;
  navServices: string;
  navTeam: string;
  navHow: string;
  navContact: string;
  officeBadge: string;
  languagesNoticeTitle: string;
  languagesNoticeText: string;
  askInYourLanguage: string;
}> = {
  it: {
    tagline: 'Orientamento & Supporto Immigrazione in Italia',
    heroTitle: 'Il tuo percorso in Italia merita ascolto, attenzione e supporto.',
    heroSubtitle: 'Italia Immigrazione offre orientamento e assistenza nelle pratiche di immigrazione, attraverso la collaborazione con professionisti legali e un servizio di comunicazione multilingue pensato per comprendere le esigenze di ogni persona.',
    heroSubPhrase: 'Ti ascoltiamo nella tua lingua e ti aiutiamo a comprendere le possibili soluzioni per il tuo caso.',
    talkWhatsApp: 'Parla con noi su WhatsApp',
    exploreServices: 'Scopri i nostri servizi',
    requestAssistance: 'Richiedi assistenza',
    navHome: 'Home',
    navAbout: 'Chi siamo',
    navServices: 'Servizi',
    navTeam: 'Il nostro team',
    navHow: 'Come funziona',
    navContact: 'Contatti',
    officeBadge: 'Sede a Milano • Via Ampère 126',
    languagesNoticeTitle: 'La tua lingua non deve essere una barriera',
    languagesNoticeText: 'Se non parli italiano, puoi comunque raccontarci la tua situazione. Collaboriamo con traduttori e interpreti di diverse lingue per facilitare il dialogo e comprendere meglio le tue esigenze.',
    askInYourLanguage: 'Chiedi assistenza nella tua lingua'
  },
  en: {
    tagline: 'Immigration Orientation & Support in Italy',
    heroTitle: 'Your journey in Italy deserves listening, attention, and support.',
    heroSubtitle: 'Italia Immigrazione provides guidance and assistance with immigration procedures, collaborating with qualified legal professionals and offering multilingual communication designed to understand everyone\'s needs.',
    heroSubPhrase: 'We listen to you in your language and help you understand possible solutions for your situation.',
    talkWhatsApp: 'Chat with us on WhatsApp',
    exploreServices: 'Explore our services',
    requestAssistance: 'Request Assistance',
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navTeam: 'Our Team',
    navHow: 'How It Works',
    navContact: 'Contact',
    officeBadge: 'Office in Milan • Via Ampère 126',
    languagesNoticeTitle: 'Your language should not be a barrier',
    languagesNoticeText: 'Even if you do not speak Italian, you can share your situation with us. We collaborate with translators and interpreters in various languages to facilitate clear dialogue.',
    askInYourLanguage: 'Request help in your language'
  },
  fr: {
    tagline: 'Orientation et Accompagnement en Immigration en Italie',
    heroTitle: 'Votre parcours en Italie mérite écoute, attention et soutien.',
    heroSubtitle: 'Italia Immigrazione offre orientation et accompagnement pour les démarches d\'immigration, en collaboration avec des professionnels du droit et un service multilingue.',
    heroSubPhrase: 'Nous vous écoutons dans votre langue et vous aidons à comprendre les solutions possibles.',
    talkWhatsApp: 'Parlez avec nous sur WhatsApp',
    exploreServices: 'Découvrir nos services',
    requestAssistance: 'Demander de l\'aide',
    navHome: 'Accueil',
    navAbout: 'À propos',
    navServices: 'Services',
    navTeam: 'Notre équipe',
    navHow: 'Comment ça marche',
    navContact: 'Contact',
    officeBadge: 'Bureau à Milan • Via Ampère 126',
    languagesNoticeTitle: 'Votre langue ne doit pas être un obstacle',
    languagesNoticeText: 'Même si vous ne parlez pas italien, vous pouvez nous exposer votre situation. Nous collaborons avec des traducteurs et interprètes.',
    askInYourLanguage: 'Demandez de l\'aide dans votre langue'
  },
  ar: {
    tagline: 'التوجيه والدعم لشؤون الهجرة في إيطاليا',
    heroTitle: 'رحلتك في إيطاليا تستحق الاستماع والاهتمام والدعم.',
    heroSubtitle: 'توفر Italia Immigrazione التوجيه والمساعدة في إجراءات الهجرة بالتعاون مع محامين متخصصين وخدمة تواصل متعددة اللغات مصممة لفهم احتياجات كل شخص.',
    heroSubPhrase: 'نستمع إليك بلغتك ونساعدك على فهم الحلول الممكنة لحالتك.',
    talkWhatsApp: 'تحدث معنا عبر واتساب',
    exploreServices: 'اكتشف خدماتنا',
    requestAssistance: 'طلب المساعدة',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'الخدمات',
    navTeam: 'فريقنا',
    navHow: 'كيف نعمل',
    navContact: 'اتصل بنا',
    officeBadge: 'مكتبنا في ميلانو • Via Ampère 126',
    languagesNoticeTitle: 'لغتك لا يجب أن تكون عائقاً',
    languagesNoticeText: 'إذا كنت لا تتحدث الإيطالية، فلا يزال بإمكانك شرح وضعك لنا. نتعاون مع مترجمين لتسهيل الحوار.',
    askInYourLanguage: 'اطلب المساعدة بلغتك'
  },
  ur: {
    tagline: 'اٹلی میں امیگریشن رہنمائی اور معاونت',
    heroTitle: 'اٹلی میں آپ کا سفر توجہ، سنجیدگی اور تعاون کا مستحق ہے۔',
    heroSubtitle: 'اٹلی امیگریشن قانونی ماہرین کے تعاون اور کثیر لسانی رابطے کے ذریعے امیگریشن معاملات میں رہنمائی فراہم کرتا ہے۔',
    heroSubPhrase: 'ہم آپ کی زبان میں آپ کی بات سنتے ہیں اور ممکنہ قانونی حل سمجھنے میں مدد کرتے ہیں۔',
    talkWhatsApp: 'واٹس ایپ پر رابطہ کریں',
    exploreServices: 'ہماری خدمات دیکھیں',
    requestAssistance: 'مدد کی درخواست کریں',
    navHome: 'ہوم',
    navAbout: 'ہمارے بارے میں',
    navServices: 'خدمات',
    navTeam: 'ہماری ٹیم',
    navHow: 'طریقہ کار',
    navContact: 'رابطہ',
    officeBadge: 'میلان دفتر • Via Ampère 126',
    languagesNoticeTitle: 'زبان آپ کی راہ میں رکاوٹ نہیں ہونی چاہیے',
    languagesNoticeText: 'اگر آپ اطالوی نہیں بول سکتے تو بھی آپ ہم سے رابطہ کر سکتے ہیں۔ ہم مترجمین کے تعاون سے آپ کی مدد کرتے ہیں۔',
    askInYourLanguage: 'اپنی زبان میں مدد حاصل کریں'
  },
  bn: {
    tagline: 'ইতালিতে অভিবাসন দিকনির্দেশনা ও সহায়তা',
    heroTitle: 'ইতালিতে আপনার যাত্রা গভীর মনোযোগ, যত্ন এবং সহায়তার যোগ্য।',
    heroSubtitle: 'ইতালিয়া ইমিগ্রাজিয়নে দক্ষ আইনজীবী ও বহুভাষিক দ্বিভাষীদের সহযোগিতায় ইতালিতে অভিবাসন ও পারমিট সংক্রান্ত সঠিক দিকনির্দেশনা প্রদান করে।',
    heroSubPhrase: 'আমরা আপনার ভাষায় আপনার কথা শুনি এবং আপনার পরিস্থিতির সম্ভাব্য সমাধান বুঝতে সহায়তা করি।',
    talkWhatsApp: 'হোয়াটসঅ্যাপে যোগাযোগ করুন',
    exploreServices: 'আমাদের সেবা দেখুন',
    requestAssistance: 'সহায়তা চান',
    navHome: 'হোম',
    navAbout: 'আমাদের পরিচয়',
    navServices: 'সেবাসমূহ',
    navTeam: 'আমাদের টিম',
    navHow: 'কীভাবে কাজ করে',
    navContact: 'যোগাযোগ',
    officeBadge: 'মিলান অফিস • Via Ampère 126',
    languagesNoticeTitle: 'ভাষা কোনো বাধা হতে পারে না',
    languagesNoticeText: 'আপনি ইতালীয় ভাষা না বললেও নিশ্চিন্তে যোগাযোগ করতে পারেন। সঠিক বোঝাপড়ার জন্য আমরা দক্ষ অনুবাদকদের সাথে কাজ করি।',
    askInYourLanguage: 'আপনার ভাষায় সহায়তা চান'
  },
  hi: {
    tagline: 'इटली में आप्रवासन मार्गदर्शन और सहायता',
    heroTitle: 'इटली में आपकी यात्रा संवेदनशीलता, ध्यान और सही सहयोग की हकदार है।',
    heroSubtitle: 'इटालिया इमिग्रेशन (Italia Immigrazione) कानूनी विशेषज्ञों के सहयोग और बहुभाषी संचार के माध्यम से आप्रवासन प्रक्रियाओं में स्पष्ट मार्गदर्शन और सहायता प्रदान करता है।',
    heroSubPhrase: 'हम आपकी भाषा में आपकी बात सुनते हैं और आपकी स्थिति के लिए कानूनी समाधान समझने में मदद करते हैं।',
    talkWhatsApp: 'व्हाट्सएप पर बात करें',
    exploreServices: 'हमारी सेवाएं देखें',
    requestAssistance: 'सहायता का अनुरोध करें',
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navServices: 'सेवाएं',
    navTeam: 'हमारी टीम',
    navHow: 'यह कैसे काम करता है',
    navContact: 'संपर्क करें',
    officeBadge: 'मिलान कार्यालय • Via Ampère 126',
    languagesNoticeTitle: 'भाषा आपके लिए कोई बाधा नहीं होनी चाहिए',
    languagesNoticeText: 'यदि आप इतालवी नहीं बोलते हैं, तब भी आप अपनी स्थिति हमें बता सकते हैं। हम स्पष्ट संवाद के लिए अनुवादकों और दुभाषियों के साथ मिलकर काम करते हैं।',
    askInYourLanguage: 'अपनी भाषा में सहायता मांगें'
  }
};
