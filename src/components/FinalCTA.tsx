
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573001234567?text=Hola, quiero empezar a cotizar con ustedes', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+573001234567';
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gaboDark via-gaboBlue to-gaboDark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empieza a cotizar con nosotros
            <span className="block text-gaboOrange">hoy mismo</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Tu próximo dispositivo te está esperando. Contáctanos y descubre las mejores 
            ofertas en tecnología con planes de financiamiento a tu medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg flex items-center gap-3 min-w-[250px] shadow-lg"
            >
              <MessageCircle size={24} />
              Habla con un asesor
            </Button>
            
            <Button
              onClick={handleCallClick}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gaboBlue px-8 py-4 text-lg flex items-center gap-3 min-w-[250px] shadow-lg"
            >
              <Phone size={24} />
              Llamar ahora
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gaboOrange mb-2">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Respuesta inmediata</h3>
              <p className="text-gray-300 text-sm">Te atendemos en menos de 5 minutos</p>
            </div>
            
            <div className="p-6">
              <div className="text-3xl font-bold text-gaboOrange mb-2">💳</div>
              <h3 className="text-lg font-semibold mb-2">Crédito pre-aprobado</h3>
              <p className="text-gray-300 text-sm">Aprobación en tiempo record</p>
            </div>
            
            <div className="p-6">
              <div className="text-3xl font-bold text-gaboOrange mb-2">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Entrega garantizada</h3>
              <p className="text-gray-300 text-sm">Recibe tu pedido cuando lo necesites</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-lg text-gray-200 mb-4">
              📱 <strong>Atención personalizada:</strong> Lunes a Sábado, 8:00 AM - 8:00 PM
            </p>
            <p className="text-sm text-gray-300">
              También puedes visitarnos en nuestra tienda física o solicitar una videollamada para ver los productos en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
