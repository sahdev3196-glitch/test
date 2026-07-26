import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Blinds: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['blinds']} />;
};

export default Blinds;
