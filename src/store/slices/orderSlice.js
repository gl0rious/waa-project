import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        personalInfo: {},
        creditCart: {}
    },
    reducers: {
        addOrder: (state, action) => {
            state.personalInfo = action.payload.personalInfo;
            state.creditCart = action.payload.creditCart;
        }
    }
})
export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;