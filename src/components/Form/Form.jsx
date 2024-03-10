import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { register } from '../../redux/operations';
export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const adress = event.target.elements.adress.value;

    dispatch(register({ name, email, phone, adress }));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} >
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
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
};
