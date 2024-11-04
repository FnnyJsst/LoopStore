import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import toast from 'react-hot-toast';

const products = {
  1: {
    name: 'Spirale',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
    description: 'Boucles d\'oreilles en spirale, fabriquées à partir de plastique recyclé.'
  },
  // Add more products...
};

const colors = ['Bleu océan', 'Vert forêt', 'Rose poudré', 'Blanc nacré'];
const metals = ['Or', 'Argent'];

export default function Product() {
  const { id } = useParams();
  const product = products[Number(id)];
  
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMetal, setSelectedMetal] = useState(metals[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    toast.success('Ajouté au panier !');
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Retiré des favoris' : 'Ajouté aux favoris');
  };

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-emerald-600">{product.price}€</p>
            </div>
            <button
              onClick={toggleWishlist}
              className={`p-2 rounded-full ${
                isWishlisted ? 'text-red-500' : 'text-neutral-400'
              }`}
            >
              <Heart fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          <p className="text-neutral-600">{product.description}</p>

          <div>
            <h3 className="font-medium mb-3">Couleur du plastique</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === color
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-neutral-200'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Finition métal</h3>
            <div className="flex gap-2">
              {metals.map((metal) => (
                <button
                  key={metal}
                  onClick={() => setSelectedMetal(metal)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedMetal === metal
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-neutral-200'
                  }`}
                >
                  {metal}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-3 px-4 bg-emerald-600 text-white rounded-full flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );
}