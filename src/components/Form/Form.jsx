import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './Form.module.css';
import { register } from '../../redux/operations';
import {sendItemsToBackend} from "../../redux/operations";
import { ShopingCartList } from '../ShopCartList/ShopCartList';
import { TotalPrice } from '../TotalPrice/TotalPrice';
export const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const adress = event.target.elements.adress.value;

    dispatch(register({ name, email, phone, adress }));
    setSubmitted(true);
    event.target.reset();
    dispatch(sendItemsToBackend())
    localStorage.setItem('cartItems', []);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} >
      {submitted ? (<p className={css.ordertext}>Your order has been sent</p>) :(<>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input className={css.input} type="text" name="name" id="name" required />
      <label className={css.label} htmlFor="email">
        Email
      </label>
      <input
        className={css.input}
        type="email"
        name="email"
        id="email"
        required
      />
      <label className={css.label} htmlFor="phone">
        Phone
      </label>
      <input
        className={css.input}
        type="tel"
        name="phone"
        id="phone"
        required
      />
      <label className={css.label} htmlFor="adress">
        Adress
      </label>
      <input
        className={css.input}
        type="text"
        name="adress"
        id="adress"
        required
      />
      <ShopingCartList/>
      <TotalPrice/>
      <button className={css.button} type="submit">
        Submit
      </button>
      </>)}
    </form>
  );
};
