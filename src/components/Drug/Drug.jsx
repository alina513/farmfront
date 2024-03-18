import css from './Drug.module.css';


export const Drug = ({value}) => { 
  

  const handleAddToCart = () => {
    let cartItems = [];
    if (localStorage) {
      const cartItemsString = localStorage.getItem('cartItems');
      cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
      console.log("cartItems",cartItems);
    } else {
      return
    }
    const existingProduct = cartItems.find(item => item.name === value.name);
    if (existingProduct) { existingProduct.number = String(Number(existingProduct.number) + 1);
      console.log("existingProduct",existingProduct);
    } else {
    cartItems.push(value);
    
    alert('Item added to cart!');
  };
  localStorage.setItem('cartItems', JSON.stringify(cartItems));}

  return(
    <div className={css.wrapper}>
  <li className={css.item}>
    <p>{value.name}</p>
    <p>Price:{value.price}</p>
    <button
      className={css.button}
      type="button"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
    </li>
  </div>
);}



