import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('about.title')}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          {/* Additional About Content */}
          <div className="grid gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To empower businesses with cutting-edge AI automation solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Innovation in Everything We Do</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Customer Success First</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Continuous Improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Ethical AI Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;