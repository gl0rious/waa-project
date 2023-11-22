import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

const initialProductList = Array.from(Array(10)).map(() => {
  return {
    id: nanoid(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.url(),
  };
});

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductList,
  reducers: {
    addProduct: (state, action) => {

      return [...state, action.payload]
    },
    updateProduct: (state, action) => {
      state = [
        ...state.filter(
          (product) => product.productNumber !== action.payload.productNumber
        ),
        action.payload,
      ];
    },
    removeProduct: (state, action) =>
      state.filter((product) => product.id !== action.payload),
  },
});

export const { addProduct, updateProduct, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
