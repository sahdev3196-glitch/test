import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Mattresses: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['mattresses']} />;
};

export default Mattresses;
