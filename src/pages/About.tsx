import React from 'react';
import { Recycle, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">À propos de Loop</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Loop transforme le plastique recyclé en bijoux élégants et durables.
          Notre mission est de créer de la beauté tout en préservant notre planète.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Recycle className="text-emerald-600" size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Matériaux recyclés</h3>
          <p className="text-neutral-600">
            Chaque paire de boucles d'oreilles est fabriquée à partir de plastique recyclé,
            donnant une nouvelle vie aux déchets.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Leaf className="text-emerald-600" size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Production éthique</h3>
          <p className="text-neutral-600">
            Notre processus de fabrication est respectueux de l'environnement
            et suit des principes éthiques stricts.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <Heart className="text-emerald-600" size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Design unique</h3>
          <p className="text-neutral-600">
            Chaque pièce est conçue avec soin pour allier style et durabilité,
            créant des bijoux aussi beaux qu'écologiques.
          </p>
        </div>
      </div>

      <div className="bg-emerald-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Notre histoire</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-neutral-700 mb-4">
            Loop est née d'une passion pour la mode durable et d'un désir de changement.
            Notre fondatrice, inspirée par la beauté des océans et préoccupée par la pollution plastique,
            a décidé de transformer ce défi environnemental en opportunité créative.
          </p>
          <p className="text-neutral-700">
            Aujourd'hui, nous collaborons avec des centres de recyclage locaux et des artisans
            talentueux pour créer des bijoux qui racontent une histoire de transformation et d'espoir.
            Chaque pièce Loop représente notre engagement envers un avenir plus durable.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800"
          alt="Atelier Loop"
          className="rounded-lg"
        />
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Notre engagement</h2>
            <p className="text-neutral-600 mb-4">
              Pour chaque paire de boucles d'oreilles vendue, nous nous engageons
              à retirer l'équivalent de 100g de plastique des océans. Nous travaillons
              en partenariat avec des associations de protection de l'environnement
              pour maximiser notre impact positif.
            </p>
            <p className="text-neutral-600">
              Notre objectif est de montrer qu'il est possible de créer de la beauté
              tout en contribuant à la préservation de notre planète.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}