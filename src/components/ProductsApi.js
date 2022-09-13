import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {getalldata}  from "../store/dataSlice";

function ProductsApi() {
  const datas = useSelector(item => {
    item.alldata;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalldata());
  }, []);

  useEffect(() => {
console.log(datas);

  }, []);
  return (
    <>
      <div>ProductsApi</div>
    </>
  );
}

export default ProductsApi;
