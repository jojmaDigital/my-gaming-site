'use client';

import React from 'react';
import Link from 'next/link';
import gamesData from '../data/games.json';

interface Game {
  title: string;
  image: string;
  genre: string;
  playPath: string;
  description: string;
}

export default function CategoriesPage() {
  // Extract unique genres from games
  const genres = Array.from(
    new Set(
      Object.values(gamesData.games).map((game: any) => game.genre)
    )
  );

  // Get games count per genre
  const genreCounts = genres.reduce((acc: Record<string, number>, genre) => {
    acc[genre] = Object.values(gamesData.games).filter((game: any) => game.genre === genre).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen lg:ml-[240px] bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Catégories de jeux</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <Link
            key={genre}
            href={`/category/${genre.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{genre}</h3>
              <p className="text-gray-400">{genreCounts[genre]} jeux</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
