// import { configureStore } from "@reduxjs/toolkit";
// import  cartSlice  from "./slices/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice"; // Import the reducer, not the slice

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer, // Pass the reducer, not the slice
//   },
// });


// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

