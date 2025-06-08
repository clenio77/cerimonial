import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-pink-600' : 'text-white'}`}>
            Elegance Eventos
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" text="Início" isScrolled={isScrolled} isActive={router.pathname === '/'} />
            <NavLink href="/sobre" text="Sobre" isScrolled={isScrolled} isActive={router.pathname === '/sobre'} />
            <NavLink href="/servicos" text="Serviços" isScrolled={isScrolled} isActive={router.pathname === '/servicos'} />
            <NavLink href="/portfolio" text="Portfólio" isScrolled={isScrolled} isActive={router.pathname === '/portfolio'} />
            <NavLink href="/contato" text="Contato" isScrolled={isScrolled} isActive={router.pathname === '/contato'} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" text="Início" isActive={router.pathname === '/'} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/sobre" text="Sobre" isActive={router.pathname === '/sobre'} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/servicos" text="Serviços" isActive={router.pathname === '/servicos'} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/portfolio" text="Portfólio" isActive={router.pathname === '/portfolio'} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/contato" text="Contato" isActive={router.pathname === '/contato'} onClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, text, isScrolled, isActive }) => (
  <Link 
    href={href} 
    className={`nav-link ${
      isActive 
        ? isScrolled ? 'text-pink-600' : 'text-white font-bold' 
        : isScrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-200'
    }`}
  >
    {text}
  </Link>
);

const MobileNavLink = ({ href, text, isActive, onClick }) => (
  <Link 
    href={href} 
    className={`block px-4 py-2 rounded-md ${isActive ? 'bg-pink-50 text-pink-600 font-bold' : 'text-gray-800 hover:bg-gray-50'}`}
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;
