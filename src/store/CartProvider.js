import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;

    const updatedItemsIndex = state.items.findIndex(
      (i) => i.id === action.payload.id
    );
    const existingItem = state.items[updatedItemsIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[updatedItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItemsIndex = state.items.findIndex(
      (i) => i.id === action.payload
    );

    const existingItem = state.items[updatedItemsIndex];

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((i) => i.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[updatedItemsIndex] = updatedItem;
    }
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", payload: id });
  };
const clearCartHandler=()=>{
  dispatchCartState({type:"CLEAR"})
}
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart:clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
