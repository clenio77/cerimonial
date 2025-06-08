import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, date, image, rating, text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-pink-100 flex items-center justify-center mr-4">
          <p className="text-pink-500 text-xs">Foto</p>
          {/* Quando tiver a imagem, descomente esta linha */}
          {/* <img src={image} alt={name} className="w-full h-full object-cover" /> */}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
