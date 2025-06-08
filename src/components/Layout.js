import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-3xl font-extrabold">Helton Oliveira</span>
                <span className="ml-2 text-sm font-light text-gray-600 hidden md:inline">Cerimonialista & Produtor de Eventos</span>
              </motion.div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={item === 'Início' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                    className={`text-gray-700 hover:text-blue-600 transition relative group`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Link href="/contato" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Agendar Consulta
              </Link>
            </motion.div>
            
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Início' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                    className="text-gray-700 hover:text-blue-600 transition py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link 
                  href="/contato" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar Consulta
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Helton Oliveira</h3>
              <p className="text-gray-400 mb-4">
                Transformando sonhos em eventos inesquecíveis com elegância e personalidade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === 'Início' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/servicos#planejamento-completo" className="text-gray-400 hover:text-white transition">
                    Planejamento Completo
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#coordenacao-dia" className="text-gray-400 hover:text-white transition">
                    Coordenação do Dia
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#consultoria" className="text-gray-400 hover:text-white transition">
                    Consultoria
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="text-gray-400 hover:text-white transition">
                    Eventos Corporativos
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="text-gray-400 hover:text-white transition">
                    Festas Temáticas
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaPhone className="text-blue-400 mt-1 mr-3" />
                  <span className="text-gray-400">(00) 00000-0000</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-blue-400 mt-1 mr-3" />
                  <span className="text-gray-400">contato@carlosoliveira.com</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                  <span className="text-gray-400">Rua Exemplo, 123 - Cidade, Estado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Helton Oliveira - Cerimonialista. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
