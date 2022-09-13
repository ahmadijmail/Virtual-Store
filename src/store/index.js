import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";
const store = configureStore({
  reducer: {
    Categorie: CategoriesSlice.reducer,
    cart:cartSlice.reducer,
    alldata:dataSlice.reducer
  },
});

export default store;
