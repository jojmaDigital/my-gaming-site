'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import games from '../data/games.json';

interface Game {
  title: string;
  image: string;
  genre: string;
  playPath: string;
  description: string;
}

export default function GamePage() {
  const searchParams = useSearchParams();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const gameKey = searchParams.get('key');
    if (gameKey && (games.games as any)[gameKey]) {
      setGame((games.games as any)[gameKey]);
    } else {
      setGame(null);
    }
  }, [searchParams]);

  if (!game) {
    return (
      <div className="min-h-screen lg:ml-[240px] bg-black text-white">
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-xl">The requested game could not be found.</p>
        </div>
      </div>
      </div>
    );
  }

  const gameUrl = game.playPath;

  return (
    <div className="min-h-screen lg:ml-[240px] bg-black text-white">
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-gray-400">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span>{game.title}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg p-4">
              <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
              
              {/* Game Iframe */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <iframe
                  src={gameUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title={game.title}
                ></iframe>
              </div>

              {/* Game Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">About {game.title}</h2>
                  <p className="text-gray-300">
                    {game.title} is a {game.genre.toLowerCase()} game.
                    Enjoy playing this classic game directly in your browser!
                  </p>
                </div>

                <div>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">
                    {game.genre}
                  </span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">Game Details</h3>
              <div className="space-y-3">
                <div>
                  <strong>Genre:</strong> {game.genre}
                </div>
                <div>
                  <strong>Status:</strong> Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
