import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    Categorie: CategoriesSlice.reducer,
    cart:cartSlice.reducer
  },
});

export default store;
