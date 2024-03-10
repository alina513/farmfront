import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
        Shop
      </NavLink>
        <NavLink className={css.link} to="/shopcart">
          ShopingCart
        </NavLink>
    </nav>
  );
};
