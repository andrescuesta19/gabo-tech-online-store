
import React from 'react';
import { MessageCircle, Flame } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  capacity?: string;
  isHot?: boolean;
  category: string;
  colors?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  originalPrice,
  capacity,
  isHot = false,
  category,
  colors
}) => {
  const handleWhatsAppInquiry = () => {
    const message = `Hola, me interesa el ${name} ${capacity ? `de ${capacity}` : ''}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573106505062?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
      <div className="relative">
        {isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
            <Flame size={12} />
            OFERTA
          </div>
        )}
        
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wide text-gaboTextLight font-medium">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-gaboText mt-1 mb-2">
            {name}
          </h3>
          {capacity && (
            <p className="text-sm text-gaboTextLight">
              {capacity}
            </p>
          )}
          {colors && Array.isArray(colors) && colors.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 border border-gray-300 text-gray-700">
                  {color}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-gaboOrange">
              {price}
            </div>
            {originalPrice && (
              <span className="text-sm text-gaboTextLight line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={handleWhatsAppInquiry}
          className="w-full bg-gaboOrange hover:bg-gaboOrangeHover text-white flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Consultar por WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
