import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const SoftFurnishings: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['customized-soft-furnishings']} />;
};

export default SoftFurnishings;
