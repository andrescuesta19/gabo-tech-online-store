
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el crédito sin inicial?",
      answer: "Nuestro sistema de crédito te permite adquirir tu dispositivo sin pagos iniciales. Solo necesitas presentar tu cédula, comprobante de ingresos y referencias. La aprobación es inmediata y puedes elegir plazos desde 6 hasta 24 meses."
    },
    {
      question: "¿Todos los productos tienen garantía?",
      answer: "Sí, todos nuestros productos son 100% originales y cuentan con garantía oficial del fabricante. Adicionalmente, ofrecemos garantía extendida y soporte técnico especializado para que tengas total tranquilidad con tu compra."
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer: "Aceptamos múltiples medios de pago: efectivo, transferencias bancarias, tarjetas de crédito y débito, Nequi, Daviplata, y nuestro sistema de crédito propio. También manejamos planes de financiamiento personalizados."
    },
    {
      question: "¿Cómo puedo verificar la disponibilidad de un producto?",
      answer: "Puedes consultar disponibilidad en tiempo real a través de nuestro WhatsApp. Nuestro inventario se actualiza constantemente, y te confirmamos stock antes de procesar tu pedido para evitar demoras."
    },
    {
      question: "¿En cuánto tiempo llega mi producto?",
      answer: "Para Bogotá y área metropolitana: entrega el mismo día o máximo 24 horas. Para otras ciudades principales: 1-2 días hábiles. Para ciudades intermedias: 2-3 días hábiles. Siempre con número de seguimiento incluido."
    },
    {
      question: "¿Manejan productos seminuevos?",
      answer: "Sí, contamos con una selección de dispositivos seminuevos certificados que pasan por rigurosas pruebas de calidad. Estos productos ofrecen excelente relación precio-valor y también incluyen garantía."
    },
    {
      question: "¿Puedo cambiar mi producto si no me gusta?",
      answer: "Tienes 3 días para cambios por motivos de gusto, siempre que el producto esté en perfecto estado y con todos sus accesorios. Para defectos de fábrica, aplicamos la garantía correspondiente sin costo adicional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaboText mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gaboTextLight max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios. 
            Si no encuentras la respuesta que buscas, contáctanos directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-gaboOrange transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gaboText hover:text-gaboOrange py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gaboTextLight leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-gaboTextLight mb-6">
            ¿Tienes otra pregunta? Nuestro equipo está disponible para ayudarte.
          </p>
          <button
            onClick={() => window.open('https://wa.me/573001234567?text=Hola, tengo una pregunta que no está en las FAQ', '_blank')}
            className="bg-gaboOrange hover:bg-gaboOrangeHover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hacer una pregunta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
