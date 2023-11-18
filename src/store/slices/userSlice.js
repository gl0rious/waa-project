import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "user",
    role: "employee",
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log("userSlice", action.payload);
      return action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
