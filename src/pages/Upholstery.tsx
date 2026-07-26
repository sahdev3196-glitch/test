import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Upholstery: React.FC = () => {
  return <CategoryPageLayout data={PRODUCTS_DATABASE['upholstery-fabrics']} />;
};

export default Upholstery;
