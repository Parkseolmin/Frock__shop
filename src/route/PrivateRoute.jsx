import React from 'react';
import ProductDetail from '../component/ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
}
