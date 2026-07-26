import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPageLayout from './CategoryPageLayout';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const Flooring: React.FC = () => {
  const location = useLocation();
  const isPvc = location.pathname.includes('pvc-flooring');
  const data = isPvc ? PRODUCTS_DATABASE['pvc-flooring'] : PRODUCTS_DATABASE['wooden-flooring'];
  return <CategoryPageLayout data={data} />;
};

export default Flooring;
