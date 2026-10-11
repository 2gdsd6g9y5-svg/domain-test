import { TeamMember, ServiceItem, StepItem } from '../types';

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'samad-chaudhry',
    name: 'Samad Chaudhry',
    role: 'Consulente di immigrazione',
    experienceYears: 11,
    experienceLabel: '11 anni di esperienza',
    bio: "Samad Chaudhry è consulente di immigrazione con 11 anni di esperienza nel settore. Si occupa dell'accoglienza dei clienti, dell'ascolto delle loro esigenze e dell'orientamento nelle procedure di immigrazione in Italia. Aiuta le persone straniere a comprendere la propria situazione e a individuare i passaggi da approfondire con i professionisti competenti.",
    photoUrl: null, // Default placeholder with initials until uploaded by user/admin
    photoAlt: 'Samad Chaudhry - Consulente di immigrazione',
    order: 1,
    isPublished: true,
    contactDirectNote: 'Accoglienza e primo orientamento'
  },
  {
    id: 'annalisa-rottola',
    name: 'Avv. Annalisa Rottola',
    role: 'Avvocata specializzata in immigrazione',
    experienceYears: 22,
    experienceLabel: '22 anni di esperienza',
    bio: "Annalisa Rottola è avvocata con 22 anni di esperienza nel settore dell'immigrazione. Contribuisce alla valutazione delle questioni legali e all'individuazione delle possibili soluzioni nel rispetto della normativa italiana applicabile.",
    photoUrl: '/src/assets/images/annalisa_rottola_1791728246177.jpg',
    photoAlt: 'Avv. Annalisa Rottola - Avvocata specializzata in immigrazione',
    order: 2,
    isPublished: true,
    contactDirectNote: 'Consulenza e valutazione legale'
  },
  {
    id: 'giovanni-rossetti',
    name: 'Giovanni Rossetti',
    role: 'Consulente per le procedure di immigrazione e i rapporti con gli uffici competenti',
    experienceYears: 15,
    experienceLabel: '15 anni di esperienza',
    bio: "Giovanni Rossetti vanta 15 anni di esperienza nelle procedure e nella documentazione relative all'immigrazione, con conoscenza delle pratiche connesse alle ambasciate italiane, alle Questure e agli altri uffici competenti. Supporta il coordinamento delle informazioni e l'orientamento sulle procedure amministrative.",
    photoUrl: null,
    photoAlt: 'Giovanni Rossetti - Rapporti con uffici competenti e procedure',
    order: 3,
    isPublished: true,
    contactDirectNote: 'Pratiche documentali e uffici'
  },
  {
    id: 'elisa-bova',
    name: 'Elisa Bova',
    role: 'Consulente di immigrazione e Digital Marketing Specialist',
    experienceYears: null,
    experienceLabel: 'Esperienza sul campo',
    bio: "Elisa Bova è consulente di immigrazione e specialista in digital marketing. Contribuisce alla comunicazione digitale di Italia Immigrazione, alla presenza online dell'organizzazione e all'orientamento dei clienti attraverso i canali digitali.",
    photoUrl: null,
    photoAlt: 'Elisa Bova - Comunicazione digitale e orientamento',
    order: 4,
    isPublished: true,
    contactDirectNote: 'Canali digitali e accoglienza online'
  },
  {
    id: 'ahlam-moutaabbid',
    name: 'Ahlam Moutaabbid',
    role: 'Traduttrice & Mediatrice (Francese, Arabo, Egiziano e Marocchino)',
    experienceYears: null,
    experienceLabel: 'Traduttrice & Mediatrice',
    bio: "Ahlam Moutaabbid è traduttrice e mediatrice linguistica per la lingua francese, l'arabo classico e i dialetti arabi (arabo egiziano e arabo marocchino / Darija). Supporta le persone nell'ascolto, nella comprensione dei documenti e nella traduzione accurata delle procedure burocratiche.",
    photoUrl: null,
    photoAlt: 'Ahlam Moutaabbid - Traduttrice lingua francese, araba, egiziana e marocchina',
    order: 5,
    isPublished: true,
    contactDirectNote: 'Traduzioni e mediazione linguistica (Francese, Arabo, Egiziano, Marocchino)'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'orientamento-generale',
    title: 'Orientamento in materia di immigrazione',
    description: 'Informazioni e orientamento sulle procedure amministrative e sulle possibili opzioni previste dalla normativa italiana in materia di immigrazione.',
    iconName: 'Compass',
    category: 'Orientamento Generale',
    details: [
      'Quadro normativo chiaro e comprensibile',
      'Verifica dei requisiti di base secondo il D.Lgs. 286/98 (Testo Unico Immigrazione)',
      'Spiegazione imparziale delle procedure senza false aspettative',
      'Individuazione degli uffici competenti (Questura, Prefettura, Sportello Unico)'
    ]
  },
  {
    id: 'permessi-soggiorno',
    title: 'Permessi di soggiorno e documentazione',
    description: "Supporto nell'organizzazione della documentazione e nell'orientamento sulle procedure relative ai permessi di soggiorno e alle altre pratiche di competenza.",
    iconName: 'FileText',
    category: 'Titoli di Soggiorno',
    details: [
      'Controllo completezza kit postale e modulistica',
      'Verifica requisiti di alloggio, reddito e idoneità abitativa',
      'Supporto nella preparazione della documentazione per appuntamento in Questura',
      'Orientamento sui diversi titoli di soggiorno (lavoro, famiglia, studio, attesa occupazione)'
    ]
  },
  {
    id: 'rinnovi-aggiornamenti',
    title: 'Rinnovi e aggiornamenti documentali',
    description: 'Orientamento per comprendere i requisiti, i documenti necessari e i passaggi da seguire per le procedure di rinnovo o aggiornamento.',
    iconName: 'RefreshCw',
    category: 'Mantenimento Status',
    details: [
      'Monitoraggio delle scadenze e tempistiche di presentazione',
      'Aggiornamento passaporto, cambio residenza o variazione stato civile',
      'Verifica dei requisiti reddituali aggiornati',
      'Soluzione a richieste di integrazione documentale da parte della Questura'
    ]
  },
  {
    id: 'irregolarita-amministrativa',
    title: 'Situazioni di irregolarità amministrativa',
    description: 'Accoglienza riservata e orientamento per le persone che non dispongono di un valido status di soggiorno o che si trovano in una situazione amministrativa complessa. Ogni caso viene valutato individualmente con il supporto di professionisti legali, per verificare se esistono percorsi regolari applicabili.',
    iconName: 'ShieldAlert',
    category: 'Casi Complessi',
    details: [
      'Massima riservatezza e ambiente protetto di ascolto',
      'Analisi approfondita della storia e dei documenti posseduti',
      'Valutazione con avvocati specializzati su eventuali presupposti di tutela',
      'Nessuna falsa promessa di sanatorie automatiche o scorciatoie'
    ]
  },
  {
    id: 'sfruttamento-vulnerabilita',
    title: 'Sfruttamento lavorativo e vulnerabilità',
    description: 'Supporto nell\'individuazione delle possibili forme di tutela per le persone straniere che subiscono sfruttamento lavorativo o condizioni di lavoro abusive. Quando necessario, orientamento verso professionisti e servizi competenti.',
    iconName: 'HeartHandshake',
    category: 'Diritti e Tutele',
    details: [
      'Ascolto empatico e riservato di situazioni di sfruttamento',
      'Informazione sui percorsi di protezione sociale previsti dalla legge (es. art. 18 / 22 TUI)',
      'Collegamento con reti legali, sindacali e di supporto sul territorio',
      'Accompagnamento verso l\'uscita da situazioni di vulnerabilità'
    ]
  },
  {
    id: 'traduzioni-multilingue',
    title: 'Traduzioni e assistenza multilingue',
    description: 'Collaboriamo con traduttori e interpreti di diverse lingue per facilitare la comunicazione, comprendere la situazione di ogni persona e rendere più accessibile il percorso di orientamento.',
    iconName: 'Languages',
    category: 'Mediazione Linguistica',
    details: [
      'Mediazione culturale e linguistica per una comprensione piena',
      'Traduzione di comunicazioni, certificati e modulistica',
      'Supporto per le lingue più diffuse tra le comunità migranti in Italia',
      'Chiarezza linguistica per evitare errori interpretativi costosi'
    ]
  },
  {
    id: 'orientamento-legale-avvocati',
    title: 'Orientamento legale tramite avvocati collaboratori',
    description: 'Collaboriamo con avvocati specializzati in materia di immigrazione, che possono esaminare le questioni legali e fornire consulenza professionale nei limiti del loro incarico.',
    iconName: 'Scale',
    category: 'Consulenza Giuridica',
    details: [
      'Professionisti abilitati ed iscritti all\'Ordine degli Avvocati',
      'Esame di ricorsi contro decreti di espulsione o rigetti di permesso',
      'Valutazione di procedimenti giudiziari e pratiche di cittadinanza',
      'Rapporto professionale chiaro e trasparente tra cliente e legale'
    ]
  },
  {
    id: 'valutazione-individuale',
    title: 'Valutazione individuale del caso',
    description: 'Ogni situazione è diversa. Raccogliamo le informazioni iniziali e aiutiamo la persona a comprendere quali passi valutare con i professionisti competenti.',
    iconName: 'UserCheck',
    category: 'Analisi Personalizzata',
    details: [
      'Colloquio approfondito per raccogliere la cronistoria migratoria',
      'Analisi dei documenti e delle comunicazioni ricevute',
      'Individuazione di una roadmap realistica dei passi successivi',
      'Pianificazione degli incontri con i consulenti o i legali incaricati'
    ]
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: 'Contattaci',
    description: 'La persona ci descrive la propria esigenza tramite WhatsApp, email o fissando un appuntamento in ufficio.',
    iconName: 'MessageSquare'
  },
  {
    stepNumber: 2,
    title: 'Ascoltiamo il tuo caso',
    description: 'Raccogliamo le informazioni iniziali con attenzione e, se necessario, organizziamo la comunicazione nella lingua della persona.',
    iconName: 'Ear'
  },
  {
    stepNumber: 3,
    title: 'Esaminiamo le possibili opzioni',
    description: 'Individuiamo le procedure da approfondire e, quando necessario, coinvolgiamo gli avvocati collaboratori per una valutazione legale.',
    iconName: 'Search'
  },
  {
    stepNumber: 4,
    title: 'Ti accompagniamo nel percorso',
    description: 'Spieghiamo i passaggi successivi, la documentazione da preparare e le modalità per procedere con i professionisti e gli uffici competenti.',
    iconName: 'Navigation'
  }
];

export const OFFICE_INFO = {
  name: 'Italia Immigrazione',
  address: 'Via Andrea Maria Ampère 126, 20131 Milano, Italia',
  email: 'samad@italiaimmigrazione.it',
  phone: '+39 353 213 6704',
  phoneDisplay: '+39 353 213 6704',
  whatsappUrl: 'https://wa.me/393532136704?text=Buongiorno,%20vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi%20di%20assistenza%20in%20materia%20di%20immigrazione%20in%20Italia.',
  whatsappRaw: 'https://wa.me/393532136704',
  hours: 'Lunedì - Venerdì: 09:00 - 18:30 (su appuntamento)',
  metro: 'M2 Piola / Lambrate FS',
  coordinates: {
    lat: 45.4851,
    lng: 9.2274
  }
};
