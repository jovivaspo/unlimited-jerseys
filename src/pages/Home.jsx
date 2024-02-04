import React from 'react';
import { CatalogueHighlights } from '../components/Catalogue/Highlights/CatalogueHighlights';
import { CatalogueLeagues } from '../components/Catalogue/Legues/CatalogueLeagues';
import { Others } from '../components/Catalogue/Others/Others';
import { CatalogueTrendingProducts } from '../components/Catalogue/Trending/CatalogueTrendingProducts';

export const Home = () => {
  return (
    <div className='w-full mx-auto mb-40'>
      <CatalogueTrendingProducts />
      <CatalogueLeagues />
      <CatalogueHighlights />
      <Others />
    </div>
  );
};
