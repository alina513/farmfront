import css from './ShopCartItem.module.css';


export const ShopCartItem = ({value}) => { 
  return(
    <div className={css.wrapper}>
  <li className={css.item}>
    <p>{value.name}</p>
    <p>Price:{value.price}</p>
    <input type="number" min="1" max="100" step="1" />
    </li>
  </div>
);}


