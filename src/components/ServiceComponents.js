import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Service Item Component
export const ServiceItem = ({ id, title, description, features, image, reverse }) => (
  <div id={id} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20`}>
    <div className="md:w-1/2">
      <div className="relative h-80 w-full rounded-lg overflow-hidden bg-pink-100 flex items-center justify-center">
        {/* Fallback para quando a imagem não está disponível */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-pink-500 font-bold text-xl">{title}</span>
        </div>
      </div>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-pink-500 mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Price Card Component
export const PriceCard = ({ title, price, features, cta, highlighted = false }) => (
  <div className={`rounded-lg p-6 ${highlighted ? 'bg-pink-50 border-2 border-pink-200 shadow-lg' : 'bg-white shadow-md'}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-pink-600 mb-4">{price}</p>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-pink-500 mr-2">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link href="/contato" className={`block text-center py-2 px-4 rounded ${highlighted ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {cta}
    </Link>
  </div>
);
