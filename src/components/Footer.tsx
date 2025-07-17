
import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle, CreditCard } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573106505062', '_blank');
  };

  return (
    <footer id="contacto" className="bg-gaboDark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-gaboOrange to-gaboBlue text-white px-4 py-2 rounded-lg font-bold text-xl inline-block mb-6">
              Gabo Technology
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas en tecnología móvil. Ofrecemos smartphones, tablets y accesorios 
              de las mejores marcas con crédito rápido, sin inicial y entrega inmediata. 
              Tu aliado tecnológico de confianza.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gabo_technology"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 p-3 rounded-full hover:scale-110 transition-transform"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gaboOrange">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gaboOrange mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Turbo, Antioquía, Colombia</p>
                  <p>Entrega a domicilio en toda la ciudad</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gaboOrange flex-shrink-0" />
                <a href="tel:+573106505062" className="text-gray-300 hover:text-white transition-colors">
                  +57 310 650 5062
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gaboOrange flex-shrink-0" />
                <a href="mailto:info@gabotechnology.com" className="text-gray-300 hover:text-white transition-colors">
                  info@gabotechnology.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gaboOrange mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Lun - Sáb: 8:00 AM - 8:00 PM</p>
                  <p>Dom: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gaboOrange">Servicios</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>• Venta de smartphones</li>
              <li>• Tablets y iPads</li>
              <li>• Accesorios tecnológicos</li>
              <li>• Audio profesional</li>
              <li>• Crédito sin inicial</li>
              <li>• Entrega inmediata</li>
              <li>• Garantía extendida</li>
              <li>• Soporte técnico</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h3 className="text-lg font-semibold mb-6 text-gaboOrange text-center">Medios de Pago</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
              <CreditCard size={20} className="text-blue-400" />
              <span className="text-gray-300 text-sm">Tarjetas</span>
            </div>
            <div className="bg-purple-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Nequi
            </div>
            <div className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Daviplata
            </div>
            <div className="bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Efecty
            </div>
            <div className="bg-gray-700 px-4 py-2 rounded-lg text-sm">
              Efectivo
            </div>
            <div className="bg-gaboOrange px-4 py-2 rounded-lg text-sm font-semibold">
              Crédito Gabo
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center text-gray-400 text-xs">
          Desarrollado por Andres Felipe Davila Cuesta
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Gabo Technology. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Devoluciones
            </a>
          </div>
        </div>

        {/* Biblical Quote */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <blockquote className="text-gray-400 italic">
            "Jehová te abrirá su buen tesoro, el cielo, para enviar la lluvia a tu tierra en su tiempo, 
            y para bendecir toda obra de tus manos" - Deuteronomio 28:12
          </blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
