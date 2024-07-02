import React from 'react';

const Button = ({ onClick, children, color, className = '', isActive = false }) => {
  const baseStyles = 'px-6 py-2 text-white font-semibold rounded-md shadow-md hover:focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const colorStyles = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
    yellow: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
  };
  const activeStyles = isActive ? 'border-4 border-double border-black' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${activeStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
