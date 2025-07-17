import React, { useState } from 'react';
import { ProductCardProps } from './ProductCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

// Aquí se debe importar o copiar el array de productos iPhone (puede importarse desde Products.tsx en una refactorización futura)
// Importar los productos de Products.tsx sería ideal, pero por ahora los copiamos aquí (mejorar luego)
const iphoneProducts: ProductCardProps[] = [
  { name: "iPhone 16 Pro Max 256GB SIM física", category: "iPhone", image: "", price: "$5,217,500 COP", capacity: "256GB SIM física" },
  { name: "iPhone 16 Pro Max 256GB e-SIM ASIS", category: "iPhone", image: "", price: "$4,364,000 COP", capacity: "256GB e-SIM ASIS" },
  { name: "iPhone 12 Pro Max 256GB NUEVO", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604021660000", price: "$2,910,000 COP", capacity: "256GB NUEVO" },
  { name: "iPhone 12 64GB", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-select-2020-family?wid=470&hei=556&fmt=png-alpha&.v=1604343709000", price: "$1,824,300 COP", capacity: "64GB" },
  { name: "iPhone 13 Pro Max 128GB", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1631652956000", price: "$3,058,800 COP", capacity: "128GB" },
  { name: "iPhone 13 128GB", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021-family?wid=470&hei=556&fmt=png-alpha&.v=1631652955000", price: "$2,330,000 COP", capacity: "128GB" },
  { name: "iPhone 16 128GB e-SIM", category: "iPhone", image: "", price: "$3,073,739 COP", capacity: "128GB e-SIM" },
  { name: "iPhone 16 Pro Max 256GB e-SIM", category: "iPhone", image: "", price: "$4,688,000 COP", capacity: "256GB e-SIM" },
  { name: "iPhone 15 Pro Max 256GB", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-select-2023?wid=470&hei=556&fmt=png-alpha&.v=1692924210177", price: "$4,100,800 COP", capacity: "256GB" },
  { name: "iPhone 15 128GB SIM física", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-select-2023-family?wid=470&hei=556&fmt=png-alpha&.v=1692924210177", price: "$3,060,000 COP", capacity: "128GB SIM física" },
  { name: "iPhone 15 128GB Seminuevo", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-select-2023-family?wid=470&hei=556&fmt=png-alpha&.v=1692924210177", price: "$2,429,900 COP", capacity: "128GB Seminuevo" },
  { name: "iPhone 11 Pro Max 64GB", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418", price: "$2,030,000 COP", capacity: "64GB" },
  { name: "iPhone 12 64GB Semi (batería 90%)", category: "iPhone", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-select-2020-family?wid=470&hei=556&fmt=png-alpha&.v=1604343709000", price: "$1,259,900 COP", capacity: "64GB Semi (batería 90%)" },
];

// Simulación de specs (en producción, se puede enriquecer con más datos)
const iphoneSpecs: Record<string, any> = {
  'iPhone 16 Pro Max 256GB SIM física': { pantalla: '6.7" OLED', camara: '48MP + 12MP', bateria: '4500mAh', sim: 'SIM física', almacenamiento: '256GB' },
  'iPhone 16 Pro Max 256GB e-SIM ASIS': { pantalla: '6.7" OLED', camara: '48MP + 12MP', bateria: '4500mAh', sim: 'e-SIM', almacenamiento: '256GB' },
  'iPhone 12 Pro Max 256GB NUEVO': { pantalla: '6.7" OLED', camara: '12MP triple', bateria: '3687mAh', sim: 'SIM física', almacenamiento: '256GB' },
  'iPhone 12 64GB': { pantalla: '6.1" OLED', camara: '12MP dual', bateria: '2815mAh', sim: 'SIM física', almacenamiento: '64GB' },
  'iPhone 13 Pro Max 128GB': { pantalla: '6.7" OLED', camara: '12MP triple', bateria: '4352mAh', sim: 'SIM física', almacenamiento: '128GB' },
  'iPhone 13 128GB': { pantalla: '6.1" OLED', camara: '12MP dual', bateria: '3240mAh', sim: 'SIM física', almacenamiento: '128GB' },
  'iPhone 16 128GB e-SIM': { pantalla: '6.1" OLED', camara: '48MP + 12MP', bateria: '4000mAh', sim: 'e-SIM', almacenamiento: '128GB' },
  'iPhone 16 Pro Max 256GB e-SIM': { pantalla: '6.7" OLED', camara: '48MP + 12MP', bateria: '4500mAh', sim: 'e-SIM', almacenamiento: '256GB' },
  'iPhone 15 Pro Max 256GB': { pantalla: '6.7" OLED', camara: '48MP triple', bateria: '4422mAh', sim: 'SIM física', almacenamiento: '256GB' },
  'iPhone 15 128GB SIM física': { pantalla: '6.1" OLED', camara: '48MP dual', bateria: '3349mAh', sim: 'SIM física', almacenamiento: '128GB' },
  'iPhone 15 128GB Seminuevo': { pantalla: '6.1" OLED', camara: '48MP dual', bateria: '3349mAh', sim: 'SIM física', almacenamiento: '128GB' },
  'iPhone 11 Pro Max 64GB': { pantalla: '6.5" OLED', camara: '12MP triple', bateria: '3969mAh', sim: 'SIM física', almacenamiento: '64GB' },
  'iPhone 12 64GB Semi (batería 90%)': { pantalla: '6.1" OLED', camara: '12MP dual', bateria: '2815mAh', sim: 'SIM física', almacenamiento: '64GB' },
};

const androidProducts: ProductCardProps[] = [
  { name: "Galaxy A16 6/128GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a166bzkgltp/gallery/co-galaxy-a16-sm-a166bzkgltp-thumb-539123321?wid=480&hei=480", price: "$641,200 COP", capacity: "6/128GB", colors: ["Negro", "Azul", "Verde"] },
  { name: "Galaxy A16 8/256GB", category: "Android", image: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-a166bzkgltp/gallery/co-galaxy-a16-sm-a166bzkgltp-thumb-539123321?wid=480&hei=480", price: "$800,000 COP", capacity: "8/256GB", colors: ["Negro", "Azul", "Verde"] },
  { name: "Redmi Note 14 6/128GB", category: "Android", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-14/specs-header.png", price: "$666,100 COP", capacity: "6/128GB", colors: ["Negro", "Azul", "Verde"] },
  { name: "Honor X6B 4/128GB", category: "Android", image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6b-1.jpg", price: "$451,000 COP", capacity: "4/128GB", colors: ["Negro", "Verde"] },
  // ...agrega más modelos según Products.tsx
];
const ipadProducts: ProductCardProps[] = [
  { name: "iPad 11 A16 128GB", category: "iPad", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-11-select-2024?wid=470&hei=556&fmt=png-alpha&.v=1714660818828", price: "$1,843,800 COP", capacity: "128GB" },
  { name: "Redmi iPad SE 4/128GB (8.7\")", category: "iPad", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-pad-se/specs-header.png", price: "$570,000 COP", capacity: "4/128GB (8.7\")" },
  // ...agrega más modelos según Products.tsx
];

export default function ComparacionesPage() {
  const [category, setCategory] = useState<'iPhone' | 'Android' | 'iPad'>('iPhone');
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const productsByCategory = {
    iPhone: iphoneProducts,
    Android: androidProducts,
    iPad: ipadProducts
  };
  const selectedProducts = productsByCategory[category].filter((p) => selected.includes(p.name));

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Comparador de Dispositivos</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => { setCategory('iPhone'); setSelected([]); }} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'iPhone' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>iPhone</button>
        <button onClick={() => { setCategory('Android'); setSelected([]); }} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'Android' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>Android</button>
        <button onClick={() => { setCategory('iPad'); setSelected([]); }} className={`px-6 py-2 rounded-full font-bold border-2 ${category === 'iPad' ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'} transition-all`}>iPad</button>
      </div>
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {productsByCategory[category].map((p) => (
          <button
            key={p.name}
            onClick={() => handleSelect(p.name)}
            className={`px-4 py-2 rounded-full border-2 font-semibold transition-all ${selected.includes(p.name) ? 'bg-[#3269a8] text-white border-[#3269a8]' : 'bg-white border-[#3269a8] text-[#3269a8]'}`}
          >
            {p.name.split(' ')[1] + (p.capacity ? ' ' + p.capacity : '')}
          </button>
        ))}
      </div>
      {selectedProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modelo</TableHead>
                <TableHead>Imagen</TableHead>
                <TableHead>Pantalla</TableHead>
                <TableHead>Cámara</TableHead>
                <TableHead>Batería</TableHead>
                <TableHead>SIM</TableHead>
                <TableHead>Almacenamiento</TableHead>
                <TableHead>Precio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedProducts.map((p) => (
                <TableRow key={p.name}>
                  <TableCell className="font-bold">{p.name}</TableCell>
                  <TableCell>
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="h-20 object-contain" />
                    ) : (
                      <span className="italic text-gray-400">Sin imagen</span>
                    )}
                  </TableCell>
                  <TableCell>{iphoneSpecs[p.name]?.pantalla || '-'}</TableCell>
                  <TableCell>{iphoneSpecs[p.name]?.camara || '-'}</TableCell>
                  <TableCell>{iphoneSpecs[p.name]?.bateria || '-'}</TableCell>
                  <TableCell>{iphoneSpecs[p.name]?.sim || '-'}</TableCell>
                  <TableCell>{iphoneSpecs[p.name]?.almacenamiento || '-'}</TableCell>
                  <TableCell>{p.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center text-gray-500">Selecciona uno o más modelos para comparar.</div>
      )}
    </div>
  );
}
