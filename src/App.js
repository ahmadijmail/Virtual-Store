import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {

  const data = useSelector((state) => state.cart.itemlist);
  console.log("data>>>", data);
  return (
    <div className="App">
      {/* <Auth /> */}
      <Layout />
    </div>
  );
}

export default App;
