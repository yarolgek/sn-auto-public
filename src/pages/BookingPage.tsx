import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function BookingPage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {t('booking.title')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto">
          {t('booking.subtitle')}
        </p>
        <div className="calendly-inline-widget" 
          data-url="https://calendly.com/ghajar-sn-automation/30min" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
}

export default BookingPage;