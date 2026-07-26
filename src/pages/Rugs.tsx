import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Rugs: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['rugs']} />;
};

export default Rugs;
