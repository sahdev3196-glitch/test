import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Wallpapers: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['wallpaper']} />;
};

export default Wallpapers;
