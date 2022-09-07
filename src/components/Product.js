import React from "react";

import "./Product.css";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
 
  const addtoCart = () => {
    dispatch(
      cartActions.addtoCart({
        name: name,
        id: id,
        price: price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addtoCart}>Add to cart</button>
    </div>
  );
};

export default Product;
