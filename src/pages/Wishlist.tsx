import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import toast from 'react-hot-toast';

const wishlistItems = [
  {
    id: 1,
    name: 'Spirale',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
    color: 'Bleu océan',
    metal: 'Or'
  },
  {
    id: 2,
    name: 'Cercle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    color: 'Vert forêt',
    metal: 'Argent'
  }
];

export default function Wishlist() {
  const navigate = useNavigate();

  const handleRemove = (id: number) => {
    toast.success('Article retiré des favoris');
  };

  const handleAddToCart = (id: number) => {
    toast.success('Ajouté au panier !');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mes favoris</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600">Votre liste de favoris est vide</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
          >
            Découvrir nos produits
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex gap-4">
                <div
                  className="w-32 h-32 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-emerald-600 mb-2">{item.price}€</p>
                  <p className="text-sm text-neutral-600 mb-1">
                    Couleur : {item.color}
                  </p>
                  <p className="text-sm text-neutral-600 mb-4">
                    Métal : {item.metal}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 text-sm"
                    >
                      <ShoppingBag size={16} />
                      <span>Ajouter au panier</span>
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="flex items-center gap-1 px-3 py-1.5 border border-neutral-200 rounded-full hover:bg-neutral-50 text-sm"
                    >
                      <Trash2 size={16} />
                      <span>Retirer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}