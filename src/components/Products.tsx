
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    // iPhones
    {
      name: "iPhone 16 Pro Max",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
      price: "$4,299,000",
      originalPrice: "$4,599,000",
      capacity: "256GB",
      isHot: true,
      category: "iPhone"
    },
    {
      name: "iPhone 15",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
      price: "$3,599,000",
      capacity: "128GB",
      isHot: false,
      category: "iPhone"
    },
    {
      name: "iPhone 13",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      price: "$2,899,000",
      capacity: "128GB",
      isHot: false,
      category: "iPhone"
    },
    {
      name: "iPhone 12",
      image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400&h=400&fit=crop",
      price: "$2,399,000",
      capacity: "64GB",
      isHot: false,
      category: "iPhone"
    },

    // Samsung
    {
      name: "Samsung Galaxy A16",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      price: "$899,000",
      capacity: "128GB",
      isHot: true,
      category: "Samsung"
    },
    {
      name: "Samsung Galaxy A36",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      price: "$1,299,000",
      capacity: "256GB",
      isHot: false,
      category: "Samsung"
    },
    {
      name: "Samsung Galaxy A05",
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
      price: "$549,000",
      capacity: "64GB",
      isHot: false,
      category: "Samsung"
    },

    // Xiaomi
    {
      name: "Xiaomi Redmi Note 14",
      image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop",
      price: "$799,000",
      capacity: "128GB",
      isHot: true,
      category: "Xiaomi"
    },
    {
      name: "Xiaomi A3",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop",
      price: "$659,000",
      capacity: "64GB",
      isHot: false,
      category: "Xiaomi"
    },

    // Tablets
    {
      name: "iPad Pro",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      price: "$3,899,000",
      capacity: "256GB",
      isHot: false,
      category: "Tablets"
    },
    {
      name: "iPad SE",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      price: "$1,899,000",
      capacity: "64GB",
      isHot: false,
      category: "Tablets"
    },

    // Accesorios
    {
      name: "BOSE S1 Pro",
      image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop",
      price: "$2,199,000",
      capacity: "Sistema de Audio",
      isHot: true,
      category: "Audio"
    }
  ];

  return (
    <section id="catalogo" className="py-20 bg-gaboBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaboText mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gaboTextLight max-w-3xl mx-auto">
            Smartphones de última generación, tablets, y accesorios tecnológicos de las mejores marcas. 
            Todos con garantía y entrega inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              capacity={product.capacity}
              isHot={product.isHot}
              category={product.category}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gaboTextLight mb-6">
            ¿No encuentras lo que buscas? Contáctanos y te ayudamos a encontrar el dispositivo perfecto.
          </p>
          <button
            onClick={() => window.open('https://wa.me/573001234567?text=Hola, necesito ayuda para encontrar un producto específico', '_blank')}
            className="bg-gaboOrange hover:bg-gaboOrangeHover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar producto específico
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
