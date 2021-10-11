import React, { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import s from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ hideCartHandler }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [wasConnected, setWasConnected] = useState();
  const cartCtx = useContext(CartContext);
  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };
  const onAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={s["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemove.bind(null, item.id)}
          onAdd={onAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const onConfirmHandler = async (userData) => {
    setIsConnecting(true);
    await fetch("https://foods-fe8e8-default-rtdb.firebaseio.com/opders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
        total: cartCtx.totalAmount,
      }),
    });
    setIsConnecting(false);
    setWasConnected(true);
    cartCtx.clearCart()
  };

  const modalForm = (
    <>
      {cartItems}
      <div className={s.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {!isCheckout && (
        <div className={s.actions}>
          <button className={s["button--alt"]} onClick={hideCartHandler}>
            Cancel
          </button>
          {cartCtx.items.length > 0 && (
            <button className={s.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
      {isCheckout && (
        <Checkout onCancel={hideCartHandler} onConfirm={onConfirmHandler} />
      )}
    </>
  );

  const isConnectingModal = <p>Your order is sending....</p>;

  const wasConnectedModal = (
    <>
      <p>Your order was succesfully sent</p>
      <div className={s.actions}>
        <button className={s["button"]} onClick={hideCartHandler}>
          Cancel
        </button>
      </div>
    </>
  );
  return (
    <Modal hideCartHandler={hideCartHandler}>
      {!isConnecting && !wasConnected && modalForm}
      {isConnecting && isConnectingModal}
      {wasConnected && wasConnectedModal}
    </Modal>
  );
};

export default Cart;
