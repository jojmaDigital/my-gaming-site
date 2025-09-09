'use client';

import React, { useState } from 'react';
import gamesData from '../data/games.json';
import Link from 'next/link';

interface Game {
  title: string;
  image: string;
  genre: string;
  playPath: string;
  description: string;
}

export default function CategoriesPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="min-h-screen lg:ml-[240px] bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Catégories de jeux</h1>
      <button
        onClick={toggleView}
        className="mb-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Affichage en {view === 'grid' ? 'liste' : 'grille'}
      </button>

      {Object.entries(gamesData.sections).map(([sectionName, gameKeys]) => (
        <section key={sectionName} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{sectionName}</h2>
          <div className={view === 'grid' ? 'grid grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {gameKeys.slice(0, 3).map((gameKey: string) => {
              const game = (gamesData.games as any)[gameKey] as Game;
              if (!game) return null;
              return (
                <div
                  key={gameKey}
                  className={
                    view === 'grid'
                      ? 'bg-gray-800 rounded p-4'
                      : 'bg-gray-800 rounded p-4 flex items-center gap-4'
                  }
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className={view === 'grid' ? 'w-full h-40 object-cover rounded' : 'w-24 h-24 object-cover rounded'}
                  />
                  <div>
                    <h3 className="text-lg font-bold">{game.title}</h3>
                    {view === 'list' && <p className="text-gray-400">{game.genre}</p>}
                  </div>
                </div>
              );
            })}
            <Link
              href={`/category/${sectionName}`}
              className={
                view === 'grid'
                  ? 'bg-blue-600 rounded p-4 hover:bg-blue-700 cursor-pointer text-center flex items-center justify-center'
                  : 'bg-blue-600 rounded p-4 flex items-center justify-center hover:bg-blue-700 cursor-pointer'
              }
            >
              <span className="text-white font-bold">Voir plus ({gameKeys.length})</span>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}
