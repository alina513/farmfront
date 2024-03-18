import css from "./TotalPrice.module.css"
import {selectCartItems} from "../../redux/selectors";
import { useSelector } from "react-redux";
export const TotalPrice = () =>{
    const items = useSelector(selectCartItems);

    const totalPrice = items.reduce((total, item) => total + parseInt(item.price)*item.number, 0);
    return (
        <>
        <p className={css.total}>Total price:{totalPrice}</p>
        </>
    )
}