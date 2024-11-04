import React, { useState } from 'react';
import { Package, User, MapPin, CreditCard } from 'lucide-react';

const orders = [
  {
    id: '#12345',
    date: '2024-03-15',
    status: 'En cours de livraison',
    total: 59.98,
    items: ['Spirale - Or', 'Cercle - Argent']
  },
  // Add more orders...
];

export default function Account() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mon compte</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                activeTab === 'orders' ? 'bg-emerald-50 text-emerald-600' : ''
              }`}
            >
              <Package size={20} />
              <span>Mes commandes</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                activeTab === 'profile' ? 'bg-emerald-50 text-emerald-600' : ''
              }`}
            >
              <User size={20} />
              <span>Profil</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                activeTab === 'addresses' ? 'bg-emerald-50 text-emerald-600' : ''
              }`}
            >
              <MapPin size={20} />
              <span>Adresses</span>
            </button>

            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                activeTab === 'payment' ? 'bg-emerald-50 text-emerald-600' : ''
              }`}
            >
              <CreditCard size={20} />
              <span>Paiement</span>
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Mes commandes</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-neutral-500">{order.date}</p>
                        </div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                          {order.status}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-600">
                        {order.items.join(', ')}
                      </div>
                      <p className="mt-2 font-medium">{order.total}€</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Mon profil</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Nom</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2"
                      defaultValue="Marie Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2"
                      defaultValue="marie@example.com"
                    />
                  </div>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700">
                    Sauvegarder
                  </button>
                </form>
              </div>
            )}

            {/* Add more tab content */}
          </div>
        </div>
      </div>
    </div>
  );
}