'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import gamesData from '../../app/data/games.json';

interface Game {
  title: string;
  image: string;
  genre: string;
  playPath: string;
  description: string;
}

export default function GamesListPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  // Convert games object to array with keys
  const gamesArray: { key: string; game: Game }[] = Object.entries(gamesData.games).map(([key, game]) => ({
    key,
    game: game as Game,
  }));

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="min-h-screen lg:ml-[240px] bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Liste des jeux</h1>
      <button
        onClick={toggleView}
        className="mb-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Affichage en {view === 'grid' ? 'liste' : 'grille'}
      </button>

      <div className={view === 'grid' ? 'grid grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
        {gamesArray.map(({ key, game }) => (
          <Link
            key={key}
            href={`/game?key=${key}`}
            className={
              view === 'grid'
                ? 'bg-gray-800 rounded p-4 hover:bg-gray-700 cursor-pointer'
                : 'bg-gray-800 rounded p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer'
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
          </Link>
        ))}
      </div>
    </div>
  );
}
