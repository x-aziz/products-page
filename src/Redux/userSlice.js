import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Said",
  surName: "Said",
  Sold: 10000,
  Counter: 0,
  product: [],
  total: 0,
};
export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    increment: (state) => {
      state.Counter += 1;
    },
    pushProduct: (state, action) => {
      state.product.push(action.payload);
      state.total += action.payload.price;
    },
    reset: (state) => {
      state.Counter = 0;
      state.product = [];
      state.Sold = -state.total;
      state.total = 0;
    },
  },
});
export const { increment, pushProduct, reset } = userSlice.actions;
export default userSlice.reducer;
