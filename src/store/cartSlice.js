import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemlist: [],
    totalquantity: 0,
    showcart: false,
  },

  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemlist.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemlist.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalquantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      console.log("action", action);
      console.log("state>>>", state);
      const existingItem = state.itemlist.find((item) => item.id === id);
      console.log("existingItem>>", existingItem);
      if (existingItem.quantity == 1) {
        state.itemlist = state.itemlist.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalquantity--;
    },

    showstate(state) {
      state.showcart = !state.showcart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
