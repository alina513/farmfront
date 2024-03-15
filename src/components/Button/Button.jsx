
import { useDispatch } from 'react-redux';
import {sendItemsToBackend} from "../../redux/operations";
import css from "./Button.module.css"
export const Button = () => {
  
    const  dispatch = useDispatch();
  const submit = () => {
    

    dispatch(sendItemsToBackend())
  };
  return (
    <>
      <button type="button" className={css.button} onClick={submit}>
        Submit
      </button>
    </>
  );
};
