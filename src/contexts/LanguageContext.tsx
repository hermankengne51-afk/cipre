import { createContext, type ReactNode, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallbackOrFr?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string, fallbackOrFr?: string): string => {
    // Si fallbackOrFr est fourni, utiliser le système simple en/fr
    if (fallbackOrFr !== undefined) {
      return language === "en" ? key : fallbackOrFr;
    }

    // Sinon, utiliser le système de clés imbriquées
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

const translations = {
  en: {
    // Header
    header: {
      home: "Home",
      programs: "Programs",
      documentation: "Documentation Center",
      news: "News & Publications",
      events: "Events",
      media: "Media",
      partnerships: "Partnerships",
      contact: "Contact",
      cipcre: "CIPCRE",
      fullName: "International Circle for the Promotion of Creation",
      donate: "Donate",
      volunteer: "Volunteer Program",
    },
    // About & Organization
    about: {
      title: "About CIPCRE",
      whoWeAre:
        "CIPCRE (Cercle International pour la Promotion de la Création) is a Cameroonian NGO created in 1990. It works in ecology and holistic development and promotes social dialogue, democracy, and human rights. It is a platform for social transformation and community empowerment.",
      founded: "Established 1990",
      foundedDesc:
        "Founded in Cameroon as a platform for social transformation, promoting ecology, holistic development, social dialogue, democracy, and human rights.",
      vision: "Vision",
      visionTitle: "We envision an Africa that is:",
      visionPoints: {
        ecologically: "Ecologically healthy",
        economically: "Economically viable",
        politically: "Politically peaceful",
        socially: "Socially integrated",
        morally: "Morally balanced",
        spiritually: "Spiritually engaged",
      },
      mission: "Mission",
      missionText:
        "Our mission is to promote creation by transforming social structures and strengthening the practical and strategic capacities of disadvantaged populations so they can take control of their future.",
      approach: "FAADD Approach",
      approachTitle:
        "CIPCRE's intervention approach is based on five pillars (FAADD):",
      approachPillars: {
        formation: "Training (Formation)",
        accompaniment: "Support (Accompagnement)",
        autonomisation: "Empowerment (Autonomisation)",
        dissemination: "Dissemination (Dissémination)",
        demultiplication: "Multiplication (Démultiplication)",
      },
      approachDesc:
        "This approach aims to create a critical mass of individuals capable of transforming society through improved knowledge, attitudes, and practices.",
      targetGroups: "Target Groups",
      interventionAreas: "Intervention Areas",
      regions: {
        west: "West Region",
        centre: "Centre Region",
        adamawa: "Adamawa Region",
        east: "East Region",
        littoral: "Littoral Region",
      },
    },
    // Programs (Updated)
    programs: {
      hero: {
        badge: "Strategic Interventions",
        title: "Our Programs",
        description:
          "Integrated approaches to sustainable development, combining community participation, environmental conservation, and economic empowerment.",
      },
      program1: {
        title: "Agriculture, Sustainable Entrepreneurship & Community Hygiene",
        description:
          "Promoting agroecological and organic value chains, eco-entrepreneurship for youth and women, and strengthening community resilience to climate change.",
        activities: "Key activities:",
        activity1: "Development of agroecological and organic value chains",
        activity2: "Promotion of eco-entrepreneurship for youth and women",
        activity3: "Strengthening community resilience to climate change",
        activity4: "Knowledge hub for agroecology in Central Africa",
        activity5: "Advocacy for sustainable agricultural policies",
      },
      program2: {
        title: "Peace & Social Cohesion",
        description:
          "Preventing drug use in schools, managing land and agropastoral conflicts, and promoting peace through community mediation and cultural activities.",
        activities: "Key activities:",
        activity1: "Prevention of drug use in schools",
        activity2: "Peaceful management of land and agropastoral conflicts",
        activity3: "Gender-based violence prevention mechanisms",
        activity4: "Community mediation",
        activity5: "Promotion of peace through theatre and digital cinema",
      },
      program3: {
        title: "Human Rights & Citizen Participation",
        description:
          "Promoting positive parenting, protecting children against violence, and supporting youth participation in democratic processes.",
        activities: "Key activities:",
        activity1: "Promotion of positive parenting",
        activity2: "Protection of children against violence",
        activity3: "Sexual and reproductive health awareness",
        activity4: "Youth participation in democratic processes",
        activity5: "Support to women's empowerment initiatives",
      },
      activeProjects: "Active Projects",
      beneficiaries: "Beneficiaries",
      countries: "Countries",
      filters: {
        all: "All Programs",
        active: "Active",
        completed: "Completed",
      },
      learnMore: "Learn More",
      status: {
        active: "Active",
        completed: "Completed",
      },
      details: {
        overview: "Overview",
        objectives: "Objectives",
        activities: "Activities",
        results: "Results & Impact",
        partners: "Partners",
        duration: "Duration",
        budget: "Budget",
        beneficiaries: "Beneficiaries",
        location: "Location",
        status: "Status",
        keyActivities: "Key Activities",
        expectedResults: "Expected Results",
      },
      targetGroups: {
        farmers: "Farmers and small livestock breeders",
        youthLeaders: "Youth leaders",
        peerEducators: "School peer educators",
        mediators: "Community mediators",
        traditionalLeaders: "Traditional leaders",
        womenGroups: "Women's groups",
        civilSociety: "Civil society organizations",
        volunteers: "Community volunteers",
      },
    },
    // Home Page
    home: {
      hero: {
        badge: "Empowering Communities",
        title: "Building Sustainable Futures Through Community-Led Development",
        description:
          "CIPCRE works with communities across Central Africa to promote sustainable development, environmental conservation, and social innovation.",
        cta: "Explore Our Work",
        years: "Years of Impact",
        communities: "Communities Reached",
        projects: "Active Projects",
      },
      mission: {
        badge: "Our Mission",
        title: "Empowering Communities for Sustainable Development",
        description:
          "CIPCRE is dedicated to promoting sustainable development through community participation, environmental conservation, and social innovation across Central Africa.",
        vision: "Vision",
        visionText:
          "A Central Africa where communities are empowered to create sustainable solutions for their development challenges.",
        approach: "Approach",
        approachText:
          "We combine participatory methods, scientific research, and local knowledge to design and implement effective development programs.",
      },
      programs: {
        badge: "Our Programs",
        title: "Strategic Focus Areas",
        description:
          "Our integrated approach addresses multiple dimensions of sustainable development",
        viewAll: "View All Programs",
      },
      impact: {
        badge: "Our Impact",
        title: "Creating Lasting Change Across Central Africa",
        description:
          "Through partnerships with communities, governments, and international organizations, we've achieved significant impact across multiple sectors.",
        beneficiaries: "Direct Beneficiaries",
        beneficiariesDesc: "People directly impacted by our programs",
        hectares: "Hectares Protected",
        hectaresDesc:
          "Forest and agricultural land under sustainable management",
        cooperatives: "Cooperatives Supported",
        cooperativesDesc:
          "Producer groups strengthened through our interventions",
        communities: "Communities",
        communitiesDesc: "Villages and communities actively participating",
        viewDetails: "View Impact Details",
      },
      partners: {
        badge: "Our Partners",
        title: "Collaborating for Greater Impact",
        description:
          "We work with leading organizations to maximize our effectiveness",
      },
    },
    // Documentation Center
    documentation: {
      hero: {
        badge: "Knowledge Hub",
        title: "Documentation Center",
        description:
          "Access our comprehensive library of research, reports, evaluations, and institutional documents. Over",
        resources: "resources available.",
        askAI: "Ask AI Assistant",
        searchHelp: "Search across all documents with AI-powered assistance",
      },
      filters: {
        categories: "Categories",
        year: "Year",
        country: "Country",
        theme: "Theme",
      },
      search: {
        placeholder: "Search documents by keyword or content...",
        help: "Search across titles, authors, abstracts, and full document content",
        showing: "Showing",
        documents: "documents",
        sortBy: "Sort by: Most Recent",
      },
      actions: {
        view: "View Document",
        download: "Download",
      },
      ai: {
        title: "AI Document Assistant",
        description: "Ask questions across all",
        documentsInLibrary: "documents in our library",
        tryAsking: "Try asking:",
        placeholder: "Ask about any topic across all documents...",
        send: "Send",
        pressEnter: "Press Enter to send, Shift+Enter for new line",
        sources: "Sources:",
        askAssistant: "Ask AI Assistant",
      },
    },
    // News & Publications
    news: {
      hero: {
        badge: "Latest Updates",
        title: "News & Publications",
        description:
          "Stay informed about our latest activities, impact stories, research findings, and organizational updates.",
      },
      filters: {
        filterBy: "Filter by theme:",
        all: "All",
        climateAction: "Climate Action",
        foodSecurity: "Food Security",
        womenEmpowerment: "Women Empowerment",
        youthEngagement: "Youth Engagement",
      },
      tabs: {
        news: "News & Updates",
        publications: "Recent Publications",
      },
      readMore: "Read Full Story",
      viewDocument: "View Document",
      viewAll: "View All Publications",
      pages: "pages",
    },
    // Events Page
    events: {
      hero: {
        badge: "Connect & Learn",
        title: "Events & Networking Opportunities",
        description:
          "Join our workshops, conferences, and networking events to connect with development practitioners, researchers, and community leaders across Africa.",
        upcoming: "Upcoming Events",
        past: "Past Events",
        countries: "Countries",
      },
      tabs: {
        upcoming: "Upcoming Events",
        past: "Past Events",
      },
      register: "Register Now",
      learnMore: "Learn More",
      searchPlaceholder: "Search events...",
      chatbot: {
        title: "Event Assistant",
        description: "Get help finding events, registration info, and more",
        placeholder: "Ask about events, registration, speakers...",
        send: "Send",
        pressEnter: "Press Enter to send",
        askAssistant: "Need Help?",
      },
    },
    // Media Page
    media: {
      hero: {
        badge: "Media Center",
        title: "Media Resources",
        description:
          "Access our photo library, videos, press releases, and brand assets for media coverage and communications.",
      },
      tabs: {
        photos: "Photo Gallery",
        videos: "Videos",
        press: "Press Releases",
        brand: "Brand Assets",
      },
      download: "Download",
      downloadAll: "Download All",
      viewRelease: "View Full Release",
      uploadDate: "Upload Date",
      duration: "Duration",
      views: "views",
    },
    // Partnerships Page (Updated)
    partnerships: {
      hero: {
        badge: "Collaborate With Us",
        title: "Partnerships & Collaboration",
        description:
          "Join us in creating sustainable impact across Central Africa through strategic partnerships, collaborative research, and innovative development solutions.",
      },
      types: {
        title: "Partnership Opportunities",
        funding: {
          title: "Funding Partners",
          description:
            "Support our mission through grants, project funding, and long-term financial partnerships.",
        },
        technical: {
          title: "Technical Partners",
          description:
            "Share expertise, provide capacity building, and collaborate on research and innovation.",
        },
        implementation: {
          title: "Implementation Partners",
          description:
            "Work together on the ground to deliver programs and maximize community impact.",
        },
        explore: "Explore Partnership",
      },
      current: {
        badge: "Current Partners",
        title: "Our Strategic Partners",
        description:
          "We collaborate with leading organizations to maximize impact",
      },
      partners: {
        bfdw: "Brot für die Welt",
        unicef: "UNICEF",
        giz: "GIZ-BMZ",
        kerk: "Kerk in Actie",
        eu: "European Union (ARCS / PROCIVIS)",
        worldBank: "World Bank",
        swedd: "SWEDD",
        civilPeace: "Service Civil pour la Paix",
      },
      benefits: {
        badge: "Partnership Benefits",
        title: "Why Partner With CIPCRE",
        description:
          "Building effective collaborations for sustainable development",
      },
      cta: {
        badge: "Get Started",
        title: "Ready to Partner With Us?",
        description:
          "Let's discuss how we can collaborate to create sustainable impact",
        button: "Contact Partnership Team",
      },
    },
    // Contact Page (Updated)
    contact: {
      hero: {
        badge: "Get In Touch",
        title: "Contact Us",
        description:
          "Reach out to learn more about our work, explore partnership opportunities, or connect with our team across Central Africa.",
      },
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        namePlaceholder: "Your full name",
        email: "Email Address",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "How can we help you?",
        message: "Message",
        messagePlaceholder: "Tell us more about your inquiry...",
        send: "Send Message",
      },
      offices: {
        title: "Our Offices",
        headquarters: "Head Office – Bafoussam",
        cameroon: "CIPCRE Cameroon",
        benin: "CIPCRE Benin",
        togo: "CIPCRE Togo",
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        hours: "Working Hours",
        hoursText: "Monday - Friday: 8:00 AM - 5:00 PM",
        address: "Address",
        website: "Website",
      },
      contactDetails: {
        hqAddress: "P.O. Box 1256 Bafoussam",
        hqPhone: "+237 694 03 30 42",
        hqEmail: "cipcre_dg@cipcre.org",
        cameroonPhone: "+237 694 02 14 74",
        cameroonEmail: "cipcre_cameroun@cipcre.org",
        beninEmail: "cipcre.benin@cipcre.org",
        togoLocation: "Lomé, Togo",
        website: "www.cipcre.org",
      },
      social: {
        title: "Follow Us",
      },
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      delete: "Delete",
      edit: "Edit",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      more: "More",
      featured: "Featured",
    },
  },
  fr: {
    // Header
    header: {
      home: "Accueil",
      programs: "Programmes",
      documentation: "Centre de Documentation",
      news: "Actualités & Publications",
      events: "Événements",
      media: "Média",
      partnerships: "Partenariats",
      contact: "Contact",
      cipcre: "CIPCRE",
      fullName: "Cercle International pour la Promotion de la Création",
      donate: "Faire un Don",
      volunteer: "Programme de Volontariat",
    },
    // About & Organization
    about: {
      title: "À Propos du CIPCRE",
      whoWeAre:
        "Le CIPCRE (Cercle International pour la Promotion de la Création) est une ONG camerounaise créée en 1990. Il œuvre dans l'écologie et le développement holistique et promeut le dialogue social, la démocratie et les droits humains. C'est une plateforme de transformation sociale et d'autonomisation communautaire.",
      founded: "Créé en 1990",
      foundedDesc:
        "Fondé au Cameroun comme plateforme de transformation sociale, promouvant l'écologie, le développement holistique, le dialogue social, la démocratie et les droits humains.",
      vision: "Vision",
      visionTitle: "Nous envisageons une Afrique qui soit :",
      visionPoints: {
        ecologically: "Écologiquement saine",
        economically: "Économiquement viable",
        politically: "Politiquement pacifique",
        socially: "Socialement intégrée",
        morally: "Moralement équilibrée",
        spiritually: "Spirituellement engagée",
      },
      mission: "Mission",
      missionText:
        "Notre mission est de promouvoir la création en transformant les structures sociales et en renforçant les capacités pratiques et stratégiques des populations défavorisées afin qu'elles puissent prendre en main leur avenir.",
      approach: "Approche FAADD",
      approachTitle:
        "L'approche d'intervention du CIPCRE repose sur cinq piliers (FAADD) :",
      approachPillars: {
        formation: "Formation",
        accompaniment: "Accompagnement",
        autonomisation: "Autonomisation",
        dissemination: "Dissémination",
        demultiplication: "Démultiplication",
      },
      approachDesc:
        "Cette approche vise à créer une masse critique de personnes capables de transformer la société grâce à l'amélioration des connaissances, des attitudes et des pratiques.",
      targetGroups: "Groupes Cibles",
      interventionAreas: "Zones d'Intervention",
      regions: {
        west: "Région de l'Ouest",
        centre: "Région du Centre",
        adamawa: "Région de l'Adamaoua",
        east: "Région de l'Est",
        littoral: "Région du Littoral",
      },
    },
    // Programs (Updated)
    programs: {
      hero: {
        badge: "Interventions Stratégiques",
        title: "Nos Programmes",
        description:
          "Approches intégrées du développement durable, combinant participation communautaire, conservation environnementale et autonomisation économique.",
      },
      program1: {
        title: "Agriculture, Entrepreneuriat Durable & Hygiène Communautaire",
        description:
          "Promotion des filières agro��cologiques et biologiques, éco-entrepreneuriat pour les jeunes et les femmes, et renforcement de la résilience communautaire au changement climatique.",
        activities: "Activités clés :",
        activity1: "Développement de filières agroécologiques et biologiques",
        activity2:
          "Promotion de l'éco-entrepreneuriat pour les jeunes et les femmes",
        activity3:
          "Renforcement de la résilience communautaire au changement climatique",
        activity4: "Pôle de connaissances en agroécologie en Afrique centrale",
        activity5: "Plaidoyer pour des politiques agricoles durables",
      },
      program2: {
        title: "Paix & Cohésion Sociale",
        description:
          "Prévention de la consommation de drogues en milieu scolaire, gestion pacifique des conflits fonciers et agropastoraux, et promotion de la paix par la médiation communautaire et les activités culturelles.",
        activities: "Activités clés :",
        activity1:
          "Prévention de la consommation de drogues en milieu scolaire",
        activity2: "Gestion pacifique des conflits fonciers et agropastoraux",
        activity3: "Mécanismes de prévention des violences basées sur le genre",
        activity4: "Médiation communautaire",
        activity5: "Promotion de la paix par le théâtre et le cinéma numérique",
      },
      program3: {
        title: "Droits Humains & Participation Citoyenne",
        description:
          "Promotion de la parentalité positive, protection des enfants contre la violence, et soutien à la participation des jeunes dans les processus démocratiques.",
        activities: "Activités clés :",
        activity1: "Promotion de la parentalité positive",
        activity2: "Protection des enfants contre la violence",
        activity3: "Sensibilisation à la santé sexuelle et reproductive",
        activity4: "Participation des jeunes aux processus démocratiques",
        activity5: "Soutien aux initiatives d'autonomisation des femmes",
      },
      activeProjects: "Projets Actifs",
      beneficiaries: "Bénéficiaires",
      countries: "Pays",
      filters: {
        all: "Tous les Programmes",
        active: "Actifs",
        completed: "Terminés",
      },
      learnMore: "En Savoir Plus",
      status: {
        active: "Actif",
        completed: "Terminé",
      },
      details: {
        overview: "Aperçu",
        objectives: "Objectifs",
        activities: "Activités",
        results: "Résultats & Impact",
        partners: "Partenaires",
        duration: "Durée",
        budget: "Budget",
        beneficiaries: "Bénéficiaires",
        location: "Localisation",
        status: "Statut",
        keyActivities: "Activités Clés",
        expectedResults: "Résultats Attendus",
      },
      targetGroups: {
        farmers: "Agriculteurs et petits éleveurs",
        youthLeaders: "Leaders jeunes",
        peerEducators: "Pairs éducateurs en milieu scolaire",
        mediators: "Médiateurs communautaires",
        traditionalLeaders: "Chefs traditionnels",
        womenGroups: "Groupes de femmes",
        civilSociety: "Organisations de la société civile",
        volunteers: "Volontaires communautaires",
      },
    },
    // Home Page
    home: {
      hero: {
        badge: "Autonomiser les Communautés",
        title:
          "Construire des Avenirs Durables par le Développement Communautaire",
        description:
          "CIPCRE travaille avec les communautés d'Afrique centrale pour promouvoir le développement durable, la conservation environnementale et l'innovation sociale.",
        cta: "Découvrir Notre Travail",
        years: "Années d'Impact",
        communities: "Communautés Touchées",
        projects: "Projets Actifs",
      },
      mission: {
        badge: "Notre Mission",
        title: "Autonomiser les Communautés pour un Développement Durable",
        description:
          "CIPCRE se consacre à la promotion du développement durable par la participation communautaire, la conservation environnementale et l'innovation sociale en Afrique centrale.",
        vision: "Vision",
        visionText:
          "Une Afrique centrale où les communautés sont habilitées à créer des solutions durables pour leurs défis de développement.",
        approach: "Approche",
        approachText:
          "Nous combinons des méthodes participatives, la recherche scientifique et les connaissances locales pour concevoir et mettre en œuvre des programmes de développement efficaces.",
      },
      programs: {
        badge: "Nos Programmes",
        title: "Domaines d'Intervention Stratégiques",
        description:
          "Notre approche intégrée aborde plusieurs dimensions du développement durable",
        viewAll: "Voir Tous les Programmes",
      },
      impact: {
        badge: "Notre Impact",
        title: "Créer un Changement Durable en Afrique Centrale",
        description:
          "Grâce à des partenariats avec les communautés, les gouvernements et les organisations internationales, nous avons réalisé un impact significatif dans plusieurs secteurs.",
        beneficiaries: "Bénéficiaires Directs",
        beneficiariesDesc: "Personnes directement impactées par nos programmes",
        hectares: "Hectares Protégés",
        hectaresDesc: "Terres forestières et agricoles sous gestion durable",
        cooperatives: "Coopératives Soutenues",
        cooperativesDesc:
          "Groupes de producteurs renforcés par nos interventions",
        communities: "Communautés",
        communitiesDesc: "Villages et communautés participant activement",
        viewDetails: "Voir les Détails d'Impact",
      },
      partners: {
        badge: "Nos Partenaires",
        title: "Collaborer pour un Plus Grand Impact",
        description:
          "Nous travaillons avec des organisations de premier plan pour maximiser notre efficacité",
      },
    },
    // Documentation Center
    documentation: {
      hero: {
        badge: "Centre de Connaissances",
        title: "Centre de Documentation",
        description:
          "Accédez à notre bibliothèque complète de recherches, rapports, évaluations et documents institutionnels. Plus de",
        resources: "ressources disponibles.",
        askAI: "Demander à l'Assistant IA",
        searchHelp: "Rechercher dans tous les documents avec l'assistance IA",
      },
      filters: {
        categories: "Catégories",
        year: "Année",
        country: "Pays",
        theme: "Thème",
      },
      search: {
        placeholder: "Rechercher des documents par mot-clé ou contenu...",
        help: "Rechercher dans les titres, auteurs, résumés et contenu complet des documents",
        showing: "Affichage de",
        documents: "documents",
        sortBy: "Trier par : Plus Récent",
      },
      actions: {
        view: "Voir le Document",
        download: "Télécharger",
      },
      ai: {
        title: "Assistant IA de Documents",
        description: "Posez des questions sur tous les",
        documentsInLibrary: "documents de notre bibliothèque",
        tryAsking: "Essayez de demander :",
        placeholder: "Posez une question sur n'importe quel sujet...",
        send: "Envoyer",
        pressEnter:
          "Appuyez sur Entrée pour envoyer, Maj+Entrée pour nouvelle ligne",
        sources: "Sources :",
        askAssistant: "Demander à l'Assistant IA",
      },
    },
    // News & Publications
    news: {
      hero: {
        badge: "Dernières Nouvelles",
        title: "Actualités & Publications",
        description:
          "Restez informé de nos dernières activités, histoires d'impact, résultats de recherche et mises à jour organisationnelles.",
      },
      filters: {
        filterBy: "Filtrer par thème :",
        all: "Tous",
        climateAction: "Action Climatique",
        foodSecurity: "Sécurité Alimentaire",
        womenEmpowerment: "Autonomisation des Femmes",
        youthEngagement: "Engagement des Jeunes",
      },
      tabs: {
        news: "Actualités & Mises à Jour",
        publications: "Publications Récentes",
      },
      readMore: "Lire l'Article Complet",
      viewDocument: "Voir le Document",
      viewAll: "Voir Toutes les Publications",
      pages: "pages",
    },
    // Events Page
    events: {
      hero: {
        badge: "Se Connecter & Apprendre",
        title: "Événements & Opportunités de Réseautage",
        description:
          "Rejoignez nos ateliers, conférences et événements de réseautage pour vous connecter avec des praticiens du développement, des chercheurs et des leaders communautaires en Afrique.",
        upcoming: "Événements à Venir",
        past: "Événements Passés",
        countries: "Pays",
      },
      tabs: {
        upcoming: "Événements à Venir",
        past: "Événements Passés",
      },
      register: "S'inscrire Maintenant",
      learnMore: "En Savoir Plus",
      searchPlaceholder: "Rechercher des événements...",
      chatbot: {
        title: "Assistant Événements",
        description:
          "Obtenez de l'aide pour trouver des événements, des informations d'inscription et plus",
        placeholder:
          "Posez des questions sur les événements, l'inscription, les intervenants...",
        send: "Envoyer",
        pressEnter: "Appuyez sur Entrée pour envoyer",
        askAssistant: "Besoin d'Aide ?",
      },
    },
    // Media Page
    media: {
      hero: {
        badge: "Centre Média",
        title: "Ressources Média",
        description:
          "Accédez à notre photothèque, vidéos, communiqués de presse et ressources de marque pour la couverture médiatique et les communications.",
      },
      tabs: {
        photos: "Galerie Photos",
        videos: "Vidéos",
        press: "Communiqués de Presse",
        brand: "Ressources de Marque",
      },
      download: "Télécharger",
      downloadAll: "Tout Télécharger",
      viewRelease: "Voir le Communiqué Complet",
      uploadDate: "Date de Publication",
      duration: "Durée",
      views: "vues",
    },
    // Partnerships Page (Updated)
    partnerships: {
      hero: {
        badge: "Collaborez Avec Nous",
        title: "Partenariats & Collaboration",
        description:
          "Rejoignez-nous pour créer un impact durable en Afrique centrale grâce à des partenariats stratégiques, une recherche collaborative et des solutions de développement innovantes.",
      },
      types: {
        title: "Opportunités de Partenariat",
        funding: {
          title: "Partenaires Financiers",
          description:
            "Soutenez notre mission par des subventions, le financement de projets et des partenariats financiers à long terme.",
        },
        technical: {
          title: "Partenaires Techniques",
          description:
            "Partagez votre expertise, offrez un renforcement des capacités et collaborez à la recherche et l'innovation.",
        },
        implementation: {
          title: "Partenaires de Mise en Œuvre",
          description:
            "Travaillez ensemble sur le terrain pour délivrer des programmes et maximiser l'impact communautaire.",
        },
        explore: "Explorer le Partenariat",
      },
      current: {
        badge: "Partenaires Actuels",
        title: "Nos Partenaires Stratégiques",
        description:
          "Nous collaborons avec des organisations de premier plan pour maximiser l'impact",
      },
      partners: {
        bfdw: "Brot für die Welt",
        unicef: "UNICEF",
        giz: "GIZ-BMZ",
        kerk: "Kerk in Actie",
        eu: "Union Européenne (ARCS / PROCIVIS)",
        worldBank: "Banque Mondiale",
        swedd: "SWEDD",
        civilPeace: "Service Civil pour la Paix",
      },
      benefits: {
        badge: "Avantages du Partenariat",
        title: "Pourquoi S'associer au CIPCRE",
        description:
          "Construire des collaborations efficaces pour un développement durable",
      },
      cta: {
        badge: "Commencer",
        title: "Prêt à Vous Associer ?",
        description:
          "Discutons de comment nous pouvons collaborer pour créer un impact durable",
        button: "Contacter l'Équipe Partenariats",
      },
    },
    // Contact Page (Updated)
    contact: {
      hero: {
        badge: "Contactez-Nous",
        title: "Nous Contacter",
        description:
          "Contactez-nous pour en savoir plus sur notre travail, explorer des opportunités de partenariat ou vous connecter avec notre équipe en Afrique centrale.",
      },
      form: {
        title: "Envoyez-nous un Message",
        name: "Nom Complet",
        namePlaceholder: "Votre nom complet",
        email: "Adresse Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "Comment pouvons-nous vous aider ?",
        message: "Message",
        messagePlaceholder: "Parlez-nous de votre demande...",
        send: "Envoyer le Message",
      },
      offices: {
        title: "Nos Bureaux",
        headquarters: "Bureau Principal – Bafoussam",
        cameroon: "CIPCRE Cameroun",
        benin: "CIPCRE Bénin",
        togo: "CIPCRE Togo",
      },
      info: {
        title: "Coordonnées",
        phone: "Téléphone",
        email: "Email",
        hours: "Horaires d'Ouverture",
        hoursText: "Lundi - Vendredi : 8h00 - 17h00",
        address: "Adresse",
        website: "Site Web",
      },
      contactDetails: {
        hqAddress: "BP 1256 Bafoussam",
        hqPhone: "+237 694 03 30 42",
        hqEmail: "cipcre_dg@cipcre.org",
        cameroonPhone: "+237 694 02 14 74",
        cameroonEmail: "cipcre_cameroun@cipcre.org",
        beninEmail: "cipcre.benin@cipcre.org",
        togoLocation: "Lomé, Togo",
        website: "www.cipcre.org",
      },
      social: {
        title: "Suivez-Nous",
      },
    },
    common: {
      loading: "Chargement...",
      error: "Une erreur s'est produite",
      close: "Fermer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      save: "Enregistrer",
      cancel: "Annuler",
      confirm: "Confirmer",
      delete: "Supprimer",
      edit: "Modifier",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      more: "Plus",
      featured: "En Vedette",
    },
  },
};
