import css from './ShopCartItem.module.css';
import { useState } from 'react';

export const ShopCartItem = ({ value }) => {
  const [number, setNumber] = useState(value.number);

  const handleNumberChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) { 
      setNumber(newValue);
    }
  };
  return (
    <div className={css.wrapper}>
      <li className={css.item}>
        <p>{value.name}</p>
        <p>Price:{value.price}</p>
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          value={number}
          onChange={handleNumberChange}
        />
      </li>
    </div>
  );
};
