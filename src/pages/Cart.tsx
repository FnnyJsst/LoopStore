import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const cartItems = [
  {
    id: 1,
    name: 'Spirale',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
    color: 'Bleu océan',
    metal: 'Or',
    quantity: 1
  },
  {
    id: 2,
    name: 'Cercle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    color: 'Vert forêt',
    metal: 'Argent',
    quantity: 1
  }
];

export default function Cart() {
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, change: number) => {
    toast.success('Quantité mise à jour');
  };

  const handleRemove = (id: number) => {
    toast.success('Article retiré du panier');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mon panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600">Votre panier est vide</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
          >
            Découvrir nos produits
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex gap-4">
                  <div
                    className="w-24 h-24 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-emerald-600">{item.price}€</p>
                        <p className="text-sm text-neutral-600 mt-1">
                          {item.color} - {item.metal}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-neutral-400 hover:text-neutral-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-1 rounded-full border border-neutral-200 hover:bg-neutral-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-1 rounded-full border border-neutral-200 hover:bg-neutral-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>{shipping.toFixed(2)}€</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full mt-6 py-3 px-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              Passer la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}