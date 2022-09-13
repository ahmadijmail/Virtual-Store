import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItem from "./CartItem";
import ProductsApi from "./ProductsApi";
import { cartActions } from "./../store/cartSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  const total = useSelector((list) => list.cart.totalPrices);

  console.log(total);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <ProductsApi />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>

      <CartItem />
    </React.Fragment>
  );
};

export default Layout;
