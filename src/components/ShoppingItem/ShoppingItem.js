import React from "react";

import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="shopping-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default ShoppingItem;
