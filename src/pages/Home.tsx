import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Recycle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Spirale',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
    description: 'Boucles d\'oreilles en spirale'
  },
  {
    id: 2,
    name: 'Cercle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    description: 'Boucles d\'oreilles circulaires'
  },
  // Add more products...
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Recycle className="text-emerald-600" size={32} />
          <h1 className="text-2xl font-bold">Loop</h1>
        </div>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <Search className="absolute left-3 top-2.5 text-neutral-400" size={20} />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer group"
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-emerald-600">{product.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
}