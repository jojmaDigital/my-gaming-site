'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Game {
  title: string;
  image: string;
  genre: string;
  playPath: string;
  description: string;
}

interface Props {
  gameKeys: string[];
  gamesData: Record<string, Game>;
  categoryName: string | undefined;
  onBack?: () => void;
  gameKeyMap?: Record<string, string>; // Map game title to key
}

export default function CategoryGamesClient({ gameKeys, gamesData, categoryName, onBack }: Props) {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  const gamesWithKeys = gameKeys
    .map((key) => ({ key, game: gamesData[key] }))
    .filter(({ game }) => game);

  return (
    <div className="min-h-screen lg:ml-[240px] bg-black text-white p-6">
      {/* Bouton retour */}
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Retour à la liste des catégories
      </button>

      {/* Titre catégorie */}
      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName}</h1>

      {/* Bouton toggle affichage */}
      <button
        onClick={toggleView}
        className="mb-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Affichage en {view === 'grid' ? 'liste' : 'grille'}
      </button>

      {/* Mode Grille style cartes */}
      {view === 'grid' ? (
       <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-6">
  {gamesWithKeys.map(({ key, game }) => (
    <Link
      key={key}
      href={`/game?key=${key}`}
      className="group relative flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-gray-800"
    >
      {/* Image */}
      <div className="w-full h-32 bg-black">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zone titre en bas */}
      <div className="bg-gray-900 text-center py-2">
        <h2 className="text-sm font-semibold truncate">{game.title}</h2>
      </div>
    </Link>
  ))}
</div>

      ) : (
        /* Mode Liste simple */
        <div className="flex flex-col gap-4">
          {gamesWithKeys.map(({ key, game }) => (
            <Link
              key={key}
              href={`/game?key=${key}`}
              className="flex items-center gap-4 p-4 rounded bg-gray-800 hover:bg-gray-700 transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-base font-bold">{game.title}</h3>
                <p className="text-gray-400 text-sm">{game.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
