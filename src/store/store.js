import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import cartItemSlice from "./slices/cartItemSlice.js"
import orderSlice from "./slices/orderSlice.js";

const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        cartItem: cartItemSlice,
        order: orderSlice
    },
});

export default store;
