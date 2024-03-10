import {selectCartItems} from "../../redux/selectors";
import { useSelector } from "react-redux";
export const TotalPrice = () =>{
    const items = useSelector(selectCartItems);

    const totalPrice = items.reduce((total, item) => total + parseInt(item.price), 0);
    return (
        <>
        <p>Total price:{totalPrice}</p>
        </>
    )
}