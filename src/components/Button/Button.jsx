import { selectCartItems } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {sendItemsToBackend} from "../../redux/operations";
import css from "./Button.module.css"
export const Button = () => {
    const order = useSelector(selectCartItems);
    const  dispatch = useDispatch();
  const submit = (event) => {
    

    dispatch(sendItemsToBackend(order))
  };
  return (
    <>
      <button type="button" className={css.button} onClick={submit}>
        Submit
      </button>
    </>
  );
};
