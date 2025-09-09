import React from 'react';
import gamesData from '../../../app/data/games.json';
import CategoryGamesClient from './CategoryGamesClient';

interface Props {
  params: Promise<{
    categoryName: string;
  }>;
}

export async function generateStaticParams() {
  // Generate static params for all categories (sections + genres)
  const sectionNames = Object.keys(gamesData.sections);
  const genreNames = Array.from(
    new Set(Object.values(gamesData.games).map((game: any) => game.genre.toLowerCase()))
  );

  const allCategories = [...sectionNames, ...genreNames];

  return allCategories.map((category) => ({
    categoryName: category.toLowerCase(),
  }));
}

export default async function CategoryGamesPage({ params }: Props) {
  const { categoryName } = await params;
  const categoryNameStr = categoryName.toLowerCase();

  let filteredGameKeys: string[] = [];

  if (categoryNameStr) {
    if (Object.prototype.hasOwnProperty.call(gamesData.sections, categoryNameStr)) {
      filteredGameKeys = (gamesData.sections as any)[categoryNameStr];
    } else {
      filteredGameKeys = Object.entries(gamesData.games)
        .filter(([key, game]) => game.genre.toLowerCase() === categoryNameStr)
        .map(([key]) => key);
    }
  }

  // Remove handleBack function and onBack prop to avoid passing event handlers to client component

  return (
    <CategoryGamesClient
      gameKeys={filteredGameKeys}
      gamesData={gamesData.games}
      categoryName={categoryNameStr}
    />
  );
}
