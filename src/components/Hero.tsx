
import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573106505062', '_blank');
  };

  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalogo');
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-[#3269a8] via-white to-[#ff9a4b] text-[#222] min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight text-[#3269a8] drop-shadow">
                  Tecnología
                  <span className="block text-[#ff9a4b]">a tu alcance</span>
                </h1>
              </div>
            
            <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl mx-auto font-semibold">
              Crédito rápido y sin inicial • Entrega inmediata
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={goToCatalog}
                size="lg"
                className="bg-gradient-to-r from-[#6da8e6] to-[#ffb97a] hover:from-[#ffb97a] hover:to-[#6da8e6] text-white font-bold px-8 py-4 text-lg flex items-center gap-2 min-w-[200px] shadow-md border-2 border-[#6da8e6]"
              >
                <ShoppingBag size={20} />
                Ver Catálogo
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gaboBlue px-8 py-4 text-lg flex items-center gap-2 min-w-[200px]"
              >
                <MessageCircle size={20} />
                Habla con un asesor
              </Button>
            </div>

            {/* Biblical Quote */}
            <div className="border-t border-gray-500 pt-8">
              <blockquote className="text-lg md:text-xl italic text-gray-300 max-w-3xl mx-auto">
                "Jehová te abrirá su buen tesoro, el cielo, para enviar la lluvia a tu tierra en su tiempo, 
                y para bendecir toda obra de tus manos"
              </blockquote>
              <cite className="block mt-4 text-gaboOrange font-semibold">
                — Deuteronomio 28:12
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gaboBackground to-transparent"></div>
    </section>
  );
};

export default Hero;
