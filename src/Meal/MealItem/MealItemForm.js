import React, { useState } from "react";
import Input from "../../UI/Input";
import s from "./MealItemForm.module.css";
const MealItemForm = ({ id, onAddAmount }) => {
  const [inputValue, setInputValue] = useState(1);
  const [inputIsValid, setInputIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue < 1 || inputValue > 50) {
      setInputIsValid(false);
      return;
    }
    onAddAmount(+inputValue);
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form className={s.form} onSubmit={submitHandler}>
      <Input
        label="amount:"
        input={{
          onChange,
          defaultValue: inputValue,
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "50",
          step: "1",
        }}
      />
      <button type="submit">Add to Cart</button>
      {!inputIsValid && <p>Please enter valid amount (1-50)</p>}
    </form>
  );
};

export default MealItemForm;
