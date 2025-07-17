import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573106505062', '_blank');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo Gabo Technology" className="h-10 w-auto" />
                <span className="text-2xl md:text-3xl font-extrabold text-gaboBlue tracking-tight">Gabo <span className="text-gaboOrange">TECHNOLOGY</span></span>
              </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gaboText hover:text-gaboBlue font-semibold transition-colors">Inicio</Link>
            <Link to="/catalogo" className="text-gaboText hover:text-gaboBlue font-semibold transition-colors">Catálogo</Link>
<Link to="/comparaciones" className="text-gaboText hover:text-gaboBlue font-semibold transition-colors">Comparaciones</Link>
            <Link to="/contacto" className="text-gaboText hover:text-gaboBlue font-semibold transition-colors">Contacto</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com/gabo_technology" target="_blank" rel="noopener noreferrer" className="text-gaboTextLight hover:text-gaboOrange transition-colors">
              <Instagram size={20} />
            </a>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gaboOrange hover:bg-gaboOrangeHover text-white flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gaboText hover:text-gaboOrange transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <a href="#inicio" className="block text-gaboText hover:text-gaboOrange transition-colors font-medium">
                Inicio
              </a>
              <a href="#catalogo" className="block text-gaboText hover:text-gaboOrange transition-colors font-medium">
                Catálogo
              </a>
              <a href="#conocenos" className="block text-gaboText hover:text-gaboOrange transition-colors font-medium">
                Conócenos
              </a>
              <a href="#contacto" className="block text-gaboText hover:text-gaboOrange transition-colors font-medium">
                Contacto
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gaboOrange hover:bg-gaboOrangeHover text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Contáctanos por WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
