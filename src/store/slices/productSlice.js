import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:8080/api/products");
    return res.data;
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    console.log("addProduct.createAsyncThunk", product);
    const res = await axios.post("http://localhost:8080/api/products", product);
    return res.data;
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    const res = await axios.update(
      `http://localhost:8080/api/products/${product.number}`,
      product
    );
    return res.data;
  }
);
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (product) => {
    await axios.delete(`http://localhost:8080/api/products/${product.number}`);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    // },
    // updateProduct: (state, action) => {
    //   const index = state.products.findIndex(
    //     (product) => product.productNumber !== action.payload.productNumber
    //   );
    //   if (index !== -1) {
    //     state.products[index] = action.payload;
    //   }
    // },
    // removeProduct: (state, action) => {
    //   const index = state.products.findIndex(
    //     (product) => product.productNumber !== action.payload.productNumber
    //   );
    //   if (index !== -1) {
    //     state.products.splice(index, 1);
    //   }
    // },
  },
  // reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchProducts.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(fetchProducts.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      console.log("addProduct.fulfilled", action);
      state.products.push(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.productNumber !== action.payload.productNumber
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.productNumber !== action.payload.productNumber
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    });
  },
});

// export const { addProduct, updateProduct, removeProduct } =
//   productSlice.actions;

export default productSlice.reducer;
