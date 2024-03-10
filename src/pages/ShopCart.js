import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchCartItems } from '../redux/operations';
import {ShopingCartList} from "../components/ShopCartList/ShopCartList.jsx";
import { Form } from "../components/Form/Form.jsx";
import { Button } from '../components/Button/Button';
import { TotalPrice } from '../components/TotalPrice/TotalPrice';


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#EBFAAE  ',
    minWidth: '100%',
  },
  wraper: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative'
  
  },
};

export default function ContactsIn() {
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(fetchCartItems());
    }, [dispatch]);
  
    return (
      <div style={styles.wraper}>
      <div style={styles.container}>
        <Form/>
      < ShopingCartList/>
      </div>
      <TotalPrice/>
      <Button/>
      </div>
    );
  }
