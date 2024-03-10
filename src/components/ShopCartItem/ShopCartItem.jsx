import css from './ShopCartItem.module.css';


export const ShopCartItem = ({value}) => { 
  return(
    <div className={css.wrapper}>
  <li className={css.item}>
    <p>{value.name}</p>
    <p>{value.price}</p>
    </li>
  </div>
);}


