import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import Notifcations2 from "./components/Notifcations2";
function App() {
  const data = useSelector((state) => state.cart);
  console.log("data>>>", data);


  return (
    <div className="App">
      <Notifcations2 type={'success'} message={"thiss is dummy"}/>
      {/* <Auth /> */}
      <Layout />
    </div>
   
  );
}

export default App;
