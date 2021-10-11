import React from "react";
import { Fragment } from "react";
import image from "../assets/images/meal.jpg";
import s from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({showCartHandler}) => {
  return (
    <Fragment>
      <header className={s.header}>
        <h1>Meals</h1>
        <HeaderCartButton  text={'Your Cart '} showCartHandler={showCartHandler}/>
      </header>
      
      <div className={s["main-image"]}>
        <img src={image} alt={image} />
      </div>
    
    </Fragment>
  );
};

export default Header;
