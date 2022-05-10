import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./ShoppingInput.module.css";
import shoppingImage from "../../shopping.jpeg";

const ShoppingInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const shoppingInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddShoppingItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <img src={shoppingImage} />
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Add to your shopping list</label>
        <input type="text" onChange={shoppingInputChangeHandler}></input>
      </div>
      <Button type="submit">Add item</Button>
    </form>
  );
};

export default ShoppingInput;
