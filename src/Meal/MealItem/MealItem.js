import React,{useContext} from "react";
import CartContext from "../../store/CartContext";
import s from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price,id }) => {
  const cartCtx=useContext(CartContext)

  const onAddAmount=(amount)=>{
cartCtx.addItem({
  id,
  name,
  description,
  price,
  amount
})
  }
  const mealPrice = `$${price.toFixed(2)}`;
  return (
    <li  className={s.meal}>
      <div>
        <h3>{name}</h3>
        <div className={s.description}>{description}</div>
        <div className={s.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddAmount={onAddAmount}/>
      </div>
    </li>
  );
};

export default MealItem;
