import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialProductList = [
  {
    id: nanoid(),
    title: "Product 1",
    description: "Description for Product 1",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 2",
    description: "Description for Product 2",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 1",
    description: "Description for Product 1",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 2",
    description: "Description for Product 2",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 1",
    description: "Description for Product 1",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 2",
    description: "Description for Product 2",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 1",
    description: "Description for Product 1",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
  {
    id: nanoid(),
    title: "Product 2",
    description: "Description for Product 2",
    imageUrl: "/images/contemplative-reptile.jpg",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductList,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateProduct: (state, action) => {
      state.products = [
        ...state.products.filter(
          (product) => product.productNumber !== action.payload.productNumber
        ),
        action.payload,
      ];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, updateProduct, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
