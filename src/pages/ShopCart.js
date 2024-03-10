import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from '../components/ContactForm/ContactForm.jsx';

import { setCartItems } from '../redux/shopSlice.js';

// import { selectIsLoading } from '../redux/selectors.js';
// import { Toaster } from 'react-hot-toast';
// import { Loader } from 'components/Loader.jsx';
// import { selectError } from '../redux/selectors.js';
import {ShopingCartList} from "../components/ShopCartList/ShopCartList.jsx"


const styles = {
  title: {
    fontWeight: 600,
    fontSize: 30,
    textAlign: 'center',
  },
};

export default function ContactsIn() {
    const dispatch = useDispatch();
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
   
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      dispatch(setCartItems(storedCartItems));
    }, [dispatch]);
  
    return (
      <div>
      {/* <Toaster /> */}
      < ShopingCartList/>
      </div>
    );
  }
