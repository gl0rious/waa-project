import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      username: "user",
      role: "user",
    },
  },
  reducers: {
    setInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
