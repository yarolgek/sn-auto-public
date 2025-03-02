import React from 'react';

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
      {children}
    </span>
  );
}

export default GradientText;