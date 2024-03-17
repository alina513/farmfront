import css from './Drug.module.css';

export const Drug = ({value}) => { 
  
  // const handleAddToCart = () => {
  //   // Отримуємо дані з localStorage або ініціалізуємо порожній масив, якщо дані відсутні
  //   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   // Додаємо новий товар до масиву
  //   cartItems.push(value);
  //   // Зберігаємо оновлений масив у localStorage
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   alert('Item added to cart!');
  // };

  const handleAddToCart = () => {
    let cartItems = [];
    // Перевіряємо наявність localStorage
    if (localStorage) {
      // Отримуємо дані з localStorage або ініціалізуємо порожній масив, якщо дані відсутні
      const cartItemsString = localStorage.getItem('cartItems');
      cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    } else {
      console.error("Local storage is not supported");
    }
    // Додаємо новий товар до масиву
    cartItems.push(value);
    // Зберігаємо оновлений масив у localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
  };

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



