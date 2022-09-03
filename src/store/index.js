import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories";
const store = configureStore({
  reducer: {
    Categorie: CategoriesSlice.reducer,
  },
});

export default store;
