import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    Categorie: 0,
  },

  reducers: {
    laptops(state, action) {
      state.Categorie = this.laptop;
    },
    tv(state, action) {
      state.Categorie = this.tv;
    },
  },
});

export const Categoriesactions = CategoriesSlice.actions;

export default CategoriesSlice;
