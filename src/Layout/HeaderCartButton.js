import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/CartContext";
import s from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ text, showCartHandler }) => {
  const [isBump, setIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberofAddedItems = items.reduce((acc, i) => acc + i.amount, 0);

  const buttonClasses = `${s.button} ${isBump ? s.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBump(true);
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);
    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button className={buttonClasses} onClick={showCartHandler}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>{text}</span>
      <span className={s.badge}>{numberofAddedItems}</span>
    </button>
  );
};

export default HeaderCartButton;
