import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elegance Eventos</h3>
            <p className="text-gray-400 mb-4">
              Transformando sonhos em eventos inesquecíveis com elegância e personalidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">Início</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">Sobre</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white">Serviços</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white">Portfólio</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#casamentos" className="text-gray-400 hover:text-white">Casamentos</Link>
              </li>
              <li>
                <Link href="/servicos#aniversarios" className="text-gray-400 hover:text-white">Aniversários</Link>
              </li>
              <li>
                <Link href="/servicos#corporativos" className="text-gray-400 hover:text-white">Eventos Corporativos</Link>
              </li>
              <li>
                <Link href="/servicos#debutantes" className="text-gray-400 hover:text-white">Festas de Debutantes</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-400" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-400" />
                <span className="text-gray-400">contato@eleganceeventos.com.br</span>
              </li>
              <li className="text-gray-400">
                Av. Paulista, 1000 - Bela Vista
                <br />
                São Paulo - SP, 01310-100
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elegance Eventos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
