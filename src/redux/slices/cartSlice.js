// import { createSlice } from "@reduxjs/toolkit";
// import { products } from "./dummyData";

// const initialState={
//     allItems: products,
//     cartItems:[],
//     totalPrice:0,

// }


// export const cartSlice=createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         addItem:(state,action)=>{},
//         removeItem:(state,action)=>{},
//         emptyCart:(state)=>{}
//     },
// })

// export const {addItem,removeItem,emptyCart}=cartSlice.actions;

// export default cartSlice.reducer;

// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, quantity });
      }
    },
    removeItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
        } else {
          state.cartItems.splice(existingItemIndex, 1);
        }
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
