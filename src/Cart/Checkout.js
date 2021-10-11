import React, { useState, useRef } from "react";
import s from "./Checkout.module.css";

const Checkout = ({ onCancel ,onConfirm }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (val) => val.trim() === "";
  const fiveChars = (val) => val.trim().length === 5;

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const orderSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = fiveChars(enteredPostal);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });
    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
    onConfirm({
      name: enteredName,
      street:enteredStreet,
      city: enteredCity,
      postal: enteredPostal
    })
    console.log(enteredName, enteredStreet, enteredCity, enteredPostal);
  };
  return (
    <form onSubmit={orderSubmitHandler} className={s.form}>
      <div className={`${s.control} ${formValidity.name ? "" : s.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Enter name please</p>}
      </div>
      <div className={`${s.control} ${formValidity.street ? "" : s.invalid}`}>
        <label htmlFor="street">Your street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Enter street please</p>}
      </div>
      <div className={`${s.control} ${formValidity.postal ? "" : s.invalid}`}>
        <label htmlFor="postal">Your postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Enter 5 chars please</p>}
      </div>
      <div className={`${s.control} ${formValidity.city ? "" : s.invalid}`}>
        <label htmlFor="city">Your city</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Enter city please</p>}
      </div>
      <div className={s.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={s.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
