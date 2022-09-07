import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const Cart = () => {
  const quantity= useSelector((item)=>item.cart.totalquantity)
  const dispatch = useDispatch()

const showcarts = () => {
  dispatch(cartActions.showstate())
}
  console.log(quantity);
  return (
    <div className="cartIcon">
      <h3 onClick={showcarts}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
