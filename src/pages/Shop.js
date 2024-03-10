import { DrugsList } from "components/DrugsList/DrugList";
import { useDispatch } from 'react-redux';
import { fetchDrugs } from '../redux/operations';
import { useEffect } from 'react';

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#EBFAAE  ',
      minWidth: '100%',
    },
    title: {
      fontWeight: 600,
      fontSize: 50,
      textAlign: 'center',
    },
  };
  
  export default function Shop() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

    return (
      <div style={styles.container}>
        <DrugsList/>
      </div>
    );
  }
  