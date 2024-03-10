import React from 'react';
import {  lazy } from 'react';

// import { refreshUser } from '../redux/operations';
// import { useAuth } from '../hooks/useAuth';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Layout } from './Layout';



const ShopPage = lazy(() => import('../pages/Shop'));
const ShopCartPage = lazy(() => import('../pages/ShopCart'));

export const App = () => {
  
  return  (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route
          path="/shopcart"
          element={<ShopCartPage/>}/>
      </Route>
    </Routes>
  );
};
