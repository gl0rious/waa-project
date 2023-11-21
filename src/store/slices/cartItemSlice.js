import {nanoid} from "nanoid";
import {faker} from "@faker-js/faker";
import {createSlice} from "@reduxjs/toolkit";

const initialCartItemsList = Array.from(Array(2)).map(() => {
    return {
        id: nanoid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        quantityInCart: 1,
        imageUrl: faker.image.url(),
    };
});
export const cartItemSlice = createSlice({
    name: "cartItem",
    initialState: initialCartItemsList,
    reducers:
        {
            addCartItem: (state, action) => {
                state.push(action.payload);
            },
            removeCartItem: (state, action) => {
                return state.filter((item) => item.id !== action.payload);
            },
            updateCartItemQuantity: (state, action) => {
                const {id, quantity} = action.payload;
                const itemToUpdate = state.find(item => item.id === id);
                if (itemToUpdate) {
                    itemToUpdate.quantityInCart = quantity;
                }
            },
        }
})

export const {addCartItem, removeCartItem, updateCartItemQuantity} = cartItemSlice.actions;
export default cartItemSlice.reducer;