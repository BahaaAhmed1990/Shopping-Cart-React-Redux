import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      console.log(action);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { AddToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;
