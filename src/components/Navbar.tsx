import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, User, Heart, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center space-y-1 ${
              isActive('/') ? 'text-emerald-600' : 'text-neutral-600'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Accueil</span>
          </button>

          <button
            onClick={() => navigate('/about')}
            className={`flex flex-col items-center space-y-1 ${
              isActive('/about') ? 'text-emerald-600' : 'text-neutral-600'
            }`}
          >
            <Info size={24} />
            <span className="text-xs">À propos</span>
          </button>

          <button
            onClick={() => navigate('/cart')}
            className={`flex flex-col items-center space-y-1 ${
              isActive('/cart') ? 'text-emerald-600' : 'text-neutral-600'
            }`}
          >
            <div className="relative">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
            <span className="text-xs">Panier</span>
          </button>

          <button
            onClick={() => navigate('/account')}
            className={`flex flex-col items-center space-y-1 ${
              isActive('/account') ? 'text-emerald-600' : 'text-neutral-600'
            }`}
          >
            <User size={24} />
            <span className="text-xs">Compte</span>
          </button>

          <button
            onClick={() => navigate('/wishlist')}
            className={`flex flex-col items-center space-y-1 ${
              isActive('/wishlist') ? 'text-emerald-600' : 'text-neutral-600'
            }`}
          >
            <Heart size={24} />
            <span className="text-xs">Favoris</span>
          </button>
        </div>
      </div>
    </nav>
  );
}