import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    Categorie: 0,
  },

  reducers: {
    setlaptops(state, action) {
      state.Categorie = "laptop";
    },
    settv(state, action) {
      state.Categorie = "tv";
    },
  },
});

export const Categoriesactions = CategoriesSlice.actions;

export default CategoriesSlice;
