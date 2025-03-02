import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

function ContactPage() {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('contact.title')}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.subtitle')}</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.email')}</p>
                  <p className="text-gray-600 dark:text-gray-400">ghajar@sn-automation.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.location')}</p>
                  <p className="text-gray-600 dark:text-gray-400">Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.bookingTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('contact.bookingSubtitle')}
            </p>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ghajar-sn-automation/30min" 
              style={{ minWidth: '320px', height: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;