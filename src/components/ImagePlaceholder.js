import React from 'react';

// Componente que gera um placeholder colorido com texto
const ImagePlaceholder = ({ text, bgColor = 'bg-blue-500', textColor = 'text-white', height = 'h-64' }) => {
  return (
    <div className={`${height} w-full ${bgColor} flex items-center justify-center ${textColor} font-medium rounded-lg overflow-hidden`}>
      {text}
    </div>
  );
};

export default ImagePlaceholder;