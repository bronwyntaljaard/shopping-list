import React, { useState } from "react";

import ShoppingList from "./components/ShoppingList/ShoppingList";
import ShoppingInput from "./components/ShoppingInput/ShoppingInput";

import "./App.css";

const App = () => {
  const [shoppingItems, setShoppingItems] = useState([
    { text: "Bread", id: "i1" },
    { text: "Milk", id: "i2" },
  ]);

  const addShoppingItemHandler = (enteredText) => {
    setShoppingItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const deleteItemHandler = (goalId) => {
    setShoppingItems((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>
      No items found. Maybe start adding some?
    </p>
  );

  if (shoppingItems.length > 0) {
    content = (
      <ShoppingList
        items={shoppingItems}
        onDeleteItem={deleteItemHandler}
      ></ShoppingList>
    );
  }

  return (
    <div id="app">
      <section id="shopping-form">
        <ShoppingInput onAddShoppingItem={addShoppingItemHandler} />
      </section>
      <section id="shopping-list">{content}</section>
    </div>
  );
};

export default App;
