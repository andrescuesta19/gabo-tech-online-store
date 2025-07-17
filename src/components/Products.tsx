import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [category, setCategory] = useState('iPhone');

  const products = [
    // iPhones
    { name: "iPhone 16 Pro Max 256GB SIM física", category: "iPhone", image: "/iphone-16-promax.png", price: "$5,217,500 COP", capacity: "256GB SIM física", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 16 Pro Max 256GB e-SIM ASIS", category: "iPhone", image: "/iphone-16-promax.png", price: "$4,364,000 COP", capacity: "256GB e-SIM ASIS", isHot: true, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 12 Pro Max 256GB NUEVO", category: "iPhone", image: "/iphone-12.png", price: "$2,910,000 COP", capacity: "256GB NUEVO", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 12 64GB", category: "iPhone", image: "/iphone-12.png", price: "$1,824,300 COP", capacity: "64GB", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 13 Pro Max 128GB", category: "iPhone", image: "/iphone-13-promax.png", price: "$3,058,800 COP", capacity: "128GB", isHot: true, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 13 128GB", category: "iPhone", image: "/iphone-13.png", price: "$2,330,000 COP", capacity: "128GB", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 16 128GB e-SIM", category: "iPhone", image: "/iphone-16.png", price: "$3,073,739 COP", capacity: "128GB e-SIM", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 16 Pro Max 256GB e-SIM", category: "iPhone", image: "/iphone-16-promax.png", price: "$4,688,000 COP", capacity: "256GB e-SIM", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 15 Pro Max 256GB", category: "iPhone", image: "/iphone-15-promax.png", price: "$4,100,800 COP", capacity: "256GB", isHot: true, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 15 128GB SIM física", category: "iPhone", image: "/iphone-15.png", price: "$3,060,000 COP", capacity: "128GB SIM física", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 15 128GB Seminuevo", category: "iPhone", image: "/iphone-15.png", price: "$2,429,900 COP", capacity: "128GB Seminuevo", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 11 Pro Max 64GB", category: "iPhone", image: "/iphone-11-promax.png", price: "$2,030,000 COP", capacity: "64GB", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    { name: "iPhone 12 64GB Semi (batería 90%)", category: "iPhone", image: "/iphone-12.png", price: "$1,259,900 COP", capacity: "64GB Semi (batería 90%)", isHot: false, colors: ["Negro", "Azul", "Verde", "Blanco", "Oro", "Morado", "Rojo"] },
    // Android Samsung
    { name: "Galaxy A16 6/128GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a166bzkgltp/gallery/co-galaxy-a16-sm-a166bzkgltp-thumb-539123321?wid=480&hei=480", price: "$641,200 COP", capacity: "6/128GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Galaxy A16 8/256GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a166bzkgltp/gallery/co-galaxy-a16-sm-a166bzkgltp-thumb-539123321?wid=480&hei=480", price: "$800,000 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Galaxy A26 5G 8/256GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a256bzkgltp/gallery/co-galaxy-a25-5g-sm-a256bzkgltp-thumb-539123321?wid=480&hei=480", price: "$1,110,000 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Galaxy A05 4/64GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a055fzkgltp/gallery/co-galaxy-a05-sm-a055fzkgltp-thumb-539123321?wid=480&hei=480", price: "$401,200 COP", capacity: "4/64GB", colors: ["Negro", "Plata"] },
    { name: "Galaxy A05 4/128GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a055fzkgltp/gallery/co-galaxy-a05-sm-a055fzkgltp-thumb-539123321?wid=480&hei=480", price: "$474,900 COP", capacity: "4/128GB", colors: ["Negro", "Plata"] },
    { name: "Galaxy A36 8/256GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a356ezkgltp/gallery/co-galaxy-a35-5g-sm-a356ezkgltp-thumb-539123321?wid=480&hei=480", price: "$1,259,900 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
    // Xiaomi
    { name: "Redmi Note 14 6/128GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-14/specs-header.png", price: "$666,100 COP", capacity: "6/128GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Redmi Note 14 8/256GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-14/specs-header.png", price: "$755,000 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Redmi Note 14 Pro 8/256GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-14-pro/specs-header.png", price: "$1,011,700 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
    { name: "Redmi 14C 4/128GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-14c/specs-header.png", price: "$472,200 COP", capacity: "4/128GB", colors: ["Negro", "Azul"] },
    { name: "Redmi A5 3/64GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-a5/specs-header.png", price: "$380,000 COP", capacity: "3/64GB", colors: ["Negro", "Azul"] },
    { name: "Redmi A3 4/128GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-a3/specs-header.png", price: "$431,300 COP", capacity: "4/128GB", colors: ["Negro", "Azul"] },
    // Honor y ZTE
    { name: "Honor X6B 4/128GB", category: "Android", image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6b-1.jpg", price: "$451,000 COP", capacity: "4/128GB", colors: ["Negro", "Verde"] },
    { name: "Honor X9C 8/256GB", category: "Android", image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9b-1.jpg", price: "$1,200,000 COP", capacity: "8/256GB", colors: ["Negro", "Verde"] },
    { name: "ZTE Blade X8 II Pro", category: "Android", image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-blade-x8-ii-pro.jpg", price: "$450,600 COP", capacity: "", colors: ["Negro"] },
    { name: "ZTE Blade X10 II", category: "Android", image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-blade-x10-ii.jpg", price: "$516,800 COP", capacity: "", colors: ["Negro"] },
    // iPad/Tablets
    { name: "iPad 11 A16 128GB", category: "iPad", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-11-select-2024?wid=470&hei=556&fmt=png-alpha&.v=1714660818828", price: "$1,843,800 COP", capacity: "128GB", isHot: false },
    { name: "iPad (10th Gen) Wi-Fi", category: "iPad", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-select-2022?wid=470&hei=556&fmt=png-alpha&.v=1664481668946", price: "$1,830,000 COP", capacity: "Wi-Fi", isHot: false },
    { name: 'Redmi iPad SE 4/128GB (8.7\")', category: 'iPad', image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-pad-se/specs-header.png', price: '$570,000 COP', capacity: '4/128GB (8.7")', isHot: false },
    { name: "Redmi iPad SE 4/128GB", category: "iPad", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-pad-se/specs-header.png", price: "$570,000 COP", capacity: "4/128GB", isHot: false },
    { name: "Redmi Pad Pro 6/128GB", category: "iPad", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-pad-pro/specs-header.png", price: "$977,000 COP", capacity: "6/128GB", isHot: false },
    // Accesorios
    { name: "BOSE S1 Pro + Wireless PA System", category: "Accesorios", image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop", price: "$3,249,900 COP", capacity: "Sistema de Audio", isHot: true },
    { name: "Cabeza Original IPH-922", category: "Accesorios", image: "https://cdn.shopify.com/s/files/1/0250/0367/0456/products/iph922.jpg?v=1669395161", price: "$125,000 COP", capacity: "", isHot: false }
  ];

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <section id="catalogo" className="py-20 bg-gaboBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaboText mb-6">Nuestro Catálogo</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setCategory('iPhone')} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'iPhone' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>iPhone</button>
            <button onClick={() => setCategory('Android')} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'Android' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>Android</button>
            <button onClick={() => setCategory('iPad')} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'iPad' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>iPad</button>
            <button onClick={() => setCategory('Accesorios')} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'Accesorios' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>Accesorios</button>
          </div>
          <p className="text-xl text-[#142864] max-w-3xl mx-auto">
            Smartphones de última generación, tablets, y accesorios tecnológicos de las mejores marcas. 
            Todos con garantía y entrega inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No hay productos en esta categoría por ahora.</div>
          )}
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
