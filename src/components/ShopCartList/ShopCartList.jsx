import React from 'react';
import { useSelector } from 'react-redux';
import { ShopCartItem } from '../ShopCartItem/ShopCartItem'; 
import css from "./ShopCartList.module.css";
import { selectCartItems } from '../../redux/selectors';

export const ShopingCartList = () => {
   
    const cartItems = useSelector(selectCartItems);
  return (
    <ul className={css.list}>
      {cartItems.map(item => (
        <ShopCartItem value={item} key={item._id} />
      ))}
    </ul>
  );
};
