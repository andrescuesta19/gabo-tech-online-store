
import React from 'react';
import { CreditCard, Truck, Shield, Headphones, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Crédito sin inicial",
      description: "Obtén tu dispositivo sin pagos iniciales"
    },
    {
      icon: Truck,
      title: "Entrega inmediata",
      description: "Recibe tu pedido en menos de 24 horas"
    },
    {
      icon: Shield,
      title: "Productos originales",
      description: "100% garantizados y con certificación oficial"
    },
    {
      icon: Headphones,
      title: "Asesoría personalizada",
      description: "Te ayudamos a elegir el mejor producto"
    },
    {
      icon: Clock,
      title: "Disponibilidad real",
      description: "Stock actualizado en tiempo real"
    },
    {
      icon: CheckCircle,
      title: "Garantía extendida",
      description: "Protección completa para tu inversión"
    }
  ];

  return (
    <section id="conocenos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaboText mb-6">
            ¿Por qué Gabo Technology?
          </h2>
          <p className="text-xl text-gaboTextLight max-w-3xl mx-auto">
            Más que una tienda, somos tu aliado tecnológico. Facilitamos el acceso a la mejor tecnología 
            con condiciones flexibles y servicio excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gaboOrange rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gaboText mb-4">
                {feature.title}
              </h3>
              <p className="text-gaboTextLight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Card */}
        <div className="bg-gradient-to-br from-gaboDark to-gaboBlue text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnología al alcance de tu mano
          </h3>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Democratizamos el acceso a la tecnología con planes de financiamiento flexibles 
            y un servicio que supera tus expectativas.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gaboOrange" />
              <span>Más de 1000 clientes satisfechos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gaboOrange" />
              <span>Entrega en toda Colombia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gaboOrange" />
              <span>Soporte técnico incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
