import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

interface NavbarProps {
  onServicesClick: (e: React.MouseEvent) => void;
  onBookClick: () => void;
}

function Navbar({ onServicesClick, onBookClick }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/#services" onClick={onServicesClick}>{t('nav.services')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
            <button 
              onClick={onBookClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function NavLink({ to, onClick, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex gap-2">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === 'en' 
            ? 'bg-orange-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('de')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === 'de' 
            ? 'bg-orange-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
}

export default Navbar;