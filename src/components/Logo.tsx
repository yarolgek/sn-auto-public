import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      <img 
        src={theme === 'dark' ? '/assets/SN Auto reverse.svg' : '/assets/SN-Auto.svg'} 
        alt="SN-Automation Logo" 
        className="h-20"
      />
    </div>
  );
}

export default Logo;