import React from "react";
import {useDispatch} from "react-redux"
import Cart from "./Cart";
import {Categoriesactions} from "../store/Categories";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();

  const showLaptop = () => {
    dispatch(Categoriesactions.setlaptops());
  };
  const showtv = () => {
    dispatch(Categoriesactions.settv());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Online Store
            </h2>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>

      <button onClick={showLaptop}>Lapotops</button>
      <span> </span>
      <button onClick={showtv}>TVs</button>
    </header>
  );
};

export default Header;
