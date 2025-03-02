import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowRight, Users, Code, Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import GradientText from './components/GradientText';
import { useLanguage } from './contexts/LanguageContext';
import { useInView } from './hooks/useInView';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { BackgroundPaths } from './components/ui/background-paths';

function PASCard({ text, icon, delay = 0 }) {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`relative p-12 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-700 opacity-0 transform transition-all duration-700 ${
        isInView ? 'animate-fade-in-up translate-y-0' : 'translate-y-20'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
        {icon}
      </div>
      <div className="relative">
        <div className="absolute -top-10 left-0 text-8xl font-bold text-yellow-500/5">{icon}</div>
        <p className="text-gray-900 dark:text-white text-xl leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, features, delay = 0 }) {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all opacity-0 ${
        isInView ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-yellow-500 mb-6">{icon}</div>
      <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => navigate('/contact')}
        className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 inline-flex items-center gap-2 transition-colors"
      >
        {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function HomePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [servicesRef, servicesInView] = useInView();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('services.outreach.title'),
      features: [
        t('services.outreach.feature1'),
        t('services.outreach.feature2'),
        t('services.outreach.feature3')
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('services.support.title'),
      features: [
        t('services.support.feature1'),
        t('services.support.feature2'),
        t('services.support.feature3')
      ]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t('services.social.title'),
      features: [
        t('services.social.feature1'),
        t('services.social.feature2')
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.website.title'),
      features: [
        t('services.website.feature1'),
        t('services.website.feature2'),
        t('services.website.feature3')
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: t('services.call.title'),
      features: [
        t('services.call.feature1'),
        t('services.call.feature2'),
        t('services.call.feature3'),
        t('services.call.feature4')
      ]
    }
  ];

  return (
    <>
      {/* Hero Section with BackgroundPaths */}
      <BackgroundPaths 
        growthText={t('hero.growth')}
        headachesText={t('hero.headaches')}
        guaranteedText={t('hero.guaranteed')}
        buttonText={t('hero.cta.book')}
        servicesText={t('hero.cta.services')}
        onButtonClick={() => navigate('/contact')}
        onServicesClick={scrollToServices}
      />

      {/* PAS Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="relative space-y-12">
          {/* Connecting line */}
          <div className="absolute left-10 top-12 bottom-12 w-0.5 bg-gradient-to-b from-yellow-500 to-orange-500 hidden md:block" />
          
          <PASCard
            icon="1"
            text={t('pas.problem.text')}
            delay={0}
          />
          <PASCard
            icon="2"
            text={t('pas.agitate.text')}
            delay={400}
          />
          <PASCard
            icon="3"
            text={t('pas.solution.text')}
            delay={800}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center opacity-0 ${
          servicesInView ? 'animate-fade-in-up' : ''
        }`}>
          {t('services.title')}
        </h2>
        <p className={`text-gray-600 dark:text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto opacity-0 ${
          servicesInView ? 'animate-fade-in-up animate-delay-100' : ''
        }`}>
          {t('services.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              features={service.features}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote={t('testimonials.quote1')}
            author={t('testimonials.author1')}
            role={t('testimonials.role.ceo')}
          />
          <TestimonialCard 
            quote={t('testimonials.quote2')}
            author={t('testimonials.author2')}
            role={t('testimonials.role.director')}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
        >
          {t('hero.cta.book')}
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">SN-Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.home')}</a></li>
                <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.services')}</a></li>
                <li><a href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('services.ai.title')}</a></li>
                <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('services.workflow.title')}</a></li>
                <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('services.custom.title')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>ghajar@sn-automation.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/#services');
    } else {
      const servicesSection = document.getElementById('services');
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize TIXAE Agents chatbot
    const initChatbot = () => {
      const overlayContainer = document.createElement('div');
      overlayContainer.id = 'VG_OVERLAY_CONTAINER';
      overlayContainer.style.width = '0';
      overlayContainer.style.height = '0';
      document.body.appendChild(overlayContainer);

      window.VG_CONFIG = {
        ID: "mvy6kf8ahd5uwedx", // YOUR AGENT ID
        region: 'eu', // YOUR ACCOUNT REGION 
        render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
        stylesheets: [
          // Base TIXAE Agents CSS
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
      };

      const script = document.createElement('script');
      script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      script.defer = true;
      document.body.appendChild(script);
    };

    initChatbot();

    // Cleanup function
    return () => {
      const overlayContainer = document.getElementById('VG_OVERLAY_CONTAINER');
      if (overlayContainer) {
        document.body.removeChild(overlayContainer);
      }
      
      const chatbotScript = document.querySelector('script[src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"]');
      if (chatbotScript) {
        document.body.removeChild(chatbotScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Navbar onServicesClick={scrollToServices} onBookClick={() => navigate('/contact')} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Chat Widget - This is now handled by TIXAE Agents */}
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800">
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-gray-600 dark:text-gray-400">{role}</p>
      </div>
    </div>
  );
}

export default App;