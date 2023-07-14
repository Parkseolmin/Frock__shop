import React from 'react';
import ProductDetail from '../component/ProductDetail';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ authenticate }) {
  return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
}
