import React from "react";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
        </ul>

      </nav>

      <button>Lapotops</button>
      <span> </span>
      <button>TVs</button>
    </header>
  );
};

export default Header;
