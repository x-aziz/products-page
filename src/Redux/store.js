import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import ProductSlice from "./productSlice";
export const store = configureStore({
  reducer: {
    User: userSlice,
    Product: ProductSlice,
  },
});
