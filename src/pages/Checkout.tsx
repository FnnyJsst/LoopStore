import React, { useState } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from 'react-hot-toast';

export default function Checkout() {
  const [promoCode, setPromoCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePromoCode = () => {
    toast.success('Code promo appliqué !');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Paiement</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Mode de paiement</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-emerald-600"
                />
                <span>Carte bancaire</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-emerald-600"
                />
                <span>PayPal</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="applepay"
                  checked={paymentMethod === 'applepay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-emerald-600"
                />
                <span>Apple Pay</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Date d'expiration
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="mt-6">
                <PayPalButtons />
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Code promo</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Entrez votre code"
                className="flex-1 rounded-lg border border-neutral-300 px-3 py-2"
              />
              <button
                onClick={handlePromoCode}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Sous-total</span>
              <span>59.98€</span>
            </div>
            <div className="flex justify-between text-emerald-600">
              <span>Réduction</span>
              <span>-10.00€</span>
            </div>
            <div className="flex justify-between">
              <span>Livraison</span>
              <span>5.00€</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>54.98€</span>
            </div>
          </div>

          <button
            className="w-full mt-6 py-3 px-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
          >
            Confirmer la commande
          </button>
        </div>
      </div>
    </div>
  );
}