
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Compré un iPhone 13 y llegó en menos de 24 horas. El servicio al cliente es excelente y los precios muy competitivos. ¡Totalmente recomendado!"
    },
    {
      name: "Carlos Rodríguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "El proceso de crédito fue súper rápido y sin complicaciones. Ahora tengo mi Galaxy A16 nuevo y estoy muy feliz con la compra. Gracias Gabo Technology!"
    },
    {
      name: "Ana Martínez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Excelente atención por WhatsApp. Me ayudaron a elegir el mejor tablet para mis estudios y el precio fue increíble. Definitivamente volveré a comprar aquí."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gaboBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaboText mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gaboTextLight max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro. 
            Lee las experiencias reales de quienes ya confían en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gaboText text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="flex mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gaboTextLight leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex">
              {renderStars(5)}
            </div>
            <div className="text-gaboText">
              <span className="font-bold text-2xl">4.9</span>
              <span className="text-gaboTextLight ml-2">de 5 estrellas</span>
            </div>
            <div className="text-gaboTextLight text-sm">
              Basado en +200 reseñas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
