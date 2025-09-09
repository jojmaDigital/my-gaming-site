'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import gamesData from '../../../app/data/games.json';
import CategoryGamesClient from './CategoryGamesClient';

export default function CategoryGamesPage() {
  const router = useRouter();
  const params = useParams();
  const { categoryName } = params;

  // Handle categoryName being string or string[]
  const categoryNameStr = Array.isArray(categoryName) ? categoryName[0] : categoryName;

  // Filter games by genre matching categoryName (case insensitive)
  const filteredGameKeys = Object.entries(gamesData.games)
    .filter(([key, game]) => game.genre.toLowerCase() === categoryNameStr?.toLowerCase())
    .map(([key]) => key);

  const handleBack = () => {
    router.push('/category');
  };

  return (
    <CategoryGamesClient
      gameKeys={filteredGameKeys}
      gamesData={gamesData.games}
      categoryName={categoryNameStr}
      onBack={handleBack}
    />
  );
}
