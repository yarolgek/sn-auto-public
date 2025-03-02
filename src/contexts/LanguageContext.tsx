import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.aiAutomation': 'AI Automation',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.growth': 'More Growth.',
    'hero.headaches': 'Less Headaches.',
    'hero.guaranteed': 'Guaranteed.',
    'hero.cta.book': 'Book a Free Strategy Call',
    'hero.cta.services': 'View Services',

    // About Section
    'about.title': 'About SN-Automation',
    'about.description': 'We help businesses harness the power of AI to streamline operations, reduce costs, and drive growth. Our cutting-edge automation solutions transform manual processes into efficient, scalable workflows that give you back your most valuable asset—time.',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive AI solutions to automate and scale your business',
    'services.learnMore': 'Learn More',
    
    // Outreach System
    'services.outreach.title': 'Outreach System',
    'services.outreach.feature1': 'B2B lead generation',
    'services.outreach.feature2': 'Personalized mass outreach',
    'services.outreach.feature3': 'Min 8 new sales appointments/mo',
    
    // Customer Support AI Chat
    'services.support.title': 'Customer Support AI Chat',
    'services.support.feature1': 'Customer support 24/7',
    'services.support.feature2': 'Books appointments automatically',
    'services.support.feature3': 'Real-time analytics',
    
    // Social Media Automations
    'services.social.title': 'Social Media Automations',
    'services.social.feature1': 'Social media post creation',
    'services.social.feature2': 'Automatic posting on schedule',
    
    // Website Development
    'services.website.title': 'Website Development',
    'services.website.feature1': 'Lightning-fast performance',
    'services.website.feature2': 'Mobile design',
    'services.website.feature3': 'SEO optimized',
    
    // Intelligent Call Agent
    'services.call.title': 'Intelligent Inbound Call Agent',
    'services.call.feature1': 'Automated Calls',
    'services.call.feature2': 'Customer Support',
    'services.call.feature3': 'Speech Recognition',
    'services.call.feature4': '24/7 Availability',

    // Services Categories
    'services.ai.title': 'AI Solutions',
    'services.workflow.title': 'Workflow Automation',
    'services.custom.title': 'Custom Development',

    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.quote1': 'SN-Automation transformed our business processes. We\'ve seen a 300% increase in efficiency.',
    'testimonials.author1': 'Sarah Johnson',
    'testimonials.quote2': 'The AI solutions provided by SN-Automation have revolutionized how we handle customer service.',
    'testimonials.author2': 'Michael Chen',
    'testimonials.role.ceo': 'CEO, TechCorp',
    'testimonials.role.director': 'Director of Operations, ServicePro',

    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Take the first step towards efficient, AI-powered automation today.',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SN-Automation. All rights reserved.',
    'footer.tagline': 'Empowering businesses through AI automation.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.bookingTitle': 'Book a Free Strategy Call',
    'contact.bookingSubtitle': 'Schedule a 30-minute consultation to discuss how we can help automate and scale your business.',

    // PAS Section
    'pas.problem.text': 'Every day, you\'re missing out on potential customers—simply because you\'re overwhelmed with tasks, your outbound system is difficult to scale, or you don\'t have the capacity to engage with every lead effectively.',
    'pas.agitate.text': 'Hiring new employees is expensive and time-consuming. Finding the right talent is uncertain, and even when you do, people have limitations—they get tired, make mistakes, take sick leave, resign for better opportunities, or relocate. Meanwhile, your business keeps missing valuable growth opportunities.',
    'pas.solution.text': 'We solve this problem for you—quickly, seamlessly, and efficiently. Our solution is fully tailored, automated, and yet highly personalized. We don\'t hide behind corporate layers or call centers. Instead, we build a direct, effective, and scalable system that helps you engage more customers effortlessly.'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.aiAutomation': 'KI-Automation',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',

    // Hero Section
    'hero.growth': 'Mehr Wachstum.',
    'hero.headaches': 'Weniger Kopfschmerzen.',
    'hero.guaranteed': 'Garantiert.',
    'hero.cta.book': 'Kostenloses Strategiegespräch buchen',
    'hero.cta.services': 'Dienstleistungen ansehen',

    // About Section
    'about.title': 'Über SN-Automation',
    'about.description': 'Wir helfen Unternehmen, die Kraft der KI zu nutzen, um Abläufe zu optimieren, Kosten zu senken und Wachstum zu fördern. Unsere hochmodernen Automatisierungslösungen verwandeln manuelle Prozesse in effiziente, skalierbare Workflows und geben Ihnen Ihr wertvollstes Gut zurück – Zeit.',

    // Services Section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende KI-Lösungen zur Automatisierung und Skalierung Ihres Unternehmens',
    'services.learnMore': 'Mehr erfahren',
    
    // Outreach System
    'services.outreach.title': 'Outreach-System',
    'services.outreach.feature1': 'B2B-Leadgenerierung',
    'services.outreach.feature2': 'Personalisierte Massenakquise',
    'services.outreach.feature3': 'Min. 8 neue Verkaufstermine/Monat',
    
    // Customer Support AI Chat
    'services.support.title': 'KI-Kundensupport-Chat',
    'services.support.feature1': 'Kundensupport rund um die Uhr',
    'services.support.feature2': 'Automatische Terminbuchung',
    'services.support.feature3': 'Echtzeit-Analysen',
    
    // Social Media Automations
    'services.social.title': 'Social Media Automatisierung',
    'services.social.feature1': 'Erstellung von Social Media Posts',
    'services.social.feature2': 'Automatisches Posting nach Zeitplan',
    
    // Website Development
    'services.website.title': 'Website-Entwicklung',
    'services.website.feature1': 'Blitzschnelle Performance',
    'services.website.feature2': 'Mobile-optimiertes Design',
    'services.website.feature3': 'SEO-optimiert',
    
    // Intelligent Call Agent
    'services.call.title': 'Intelligenter Anrufbeantworter',
    'services.call.feature1': 'Automatisierte Anrufe',
    'services.call.feature2': 'Kundensupport',
    'services.call.feature3': 'Spracherkennung',
    'services.call.feature4': '24/7 Verfügbarkeit',

    // Services Categories
    'services.ai.title': 'KI-Lösungen',
    'services.workflow.title': 'Workflow-Automatisierung',
    'services.custom.title': 'Individuelle Entwicklung',

    // Testimonials Section
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.quote1': 'SN-Automation hat unsere Geschäftsprozesse transformiert. Wir haben eine 300%ige Steigerung der Effizienz erreicht.',
    'testimonials.author1': 'Sarah Johnson',
    'testimonials.quote2': 'Die KI-Lösungen von SN-Automation haben revolutioniert, wie wir den Kundenservice handhaben.',
    'testimonials.author2': 'Michael Chen',
    'testimonials.role.ceo': 'CEO, TechCorp',
    'testimonials.role.director': 'Betriebsleiter, ServicePro',

    // CTA Section
    'cta.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'cta.subtitle': 'Machen Sie den ersten Schritt in Richtung effizienter, KI-gesteuerter Automatisierung.',

    // Footer
    'footer.quickLinks': 'Schnellzugriff',
    'footer.services': 'Dienstleistungen',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2024 SN-Automation. Alle Rechte vorbehalten.',
    'footer.tagline': 'Unternehmen durch KI-Automatisierung stärken.',

    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit unserem Team auf',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.bookingTitle': 'Kostenloses Strategiegespräch buchen',
    'contact.bookingSubtitle': 'Vereinbaren Sie eine 30-minütige Beratung, um zu besprechen, wie wir Ihr Unternehmen automatisieren und skalieren können.',

    // PAS Section
    'pas.problem.text': 'Täglich entgehen Ihnen potenzielle Kunden – einfach weil Sie mit Aufgaben überlastet sind, Ihr Outbound-System schwer zu skalieren ist oder Sie nicht die Kapazität haben, jeden Lead effektiv zu betreuen.',
    'pas.agitate.text': 'Neue Mitarbeiter einzustellen ist teuer und zeitaufwendig. Die richtige Person zu finden ist ungewiss, und selbst wenn Sie sie finden, haben Menschen ihre Grenzen – sie werden müde, machen Fehler, werden krank, kündigen für bessere Chancen oder ziehen um. Währenddessen verpasst Ihr Unternehmen wertvolle Wachstumschancen.',
    'pas.solution.text': 'Wir lösen dieses Problem für Sie – schnell, nahtlos und effizient. Unsere Lösung ist vollständig maßgeschneidert, automatisiert und dennoch hochgradig personalisiert. Wir verstecken uns nicht hinter Unternehmensebenen oder Callcentern. Stattdessen bauen wir ein direktes, effektives und skalierbares System, das Ihnen hilft, mühelos mehr Kunden zu erreichen.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}