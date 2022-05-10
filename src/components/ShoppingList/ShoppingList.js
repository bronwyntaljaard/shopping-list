import React from "react";

import ShoppingItem from "../ShoppingItem/ShoppingItem";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  return (
    <ul className="shopping-list">
      {props.items.map((item) => (
        <ShoppingItem key={item.key} id={item.id} onDelete={props.onDeleteItem}>
          {item.text}
        </ShoppingItem>
      ))}
    </ul>
  );
};

export default ShoppingList;
