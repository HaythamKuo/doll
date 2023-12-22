import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerInfo: {
      nickname: "",
      email: "",
      password: "",
    },
    confirmPassword: "",
  },
  reducers: {
    applyUser: (state, action) => {
      state.registerInfo = { ...state.registerInfo, ...action.payload };
      state.confirmPassword = action.payload.confirmPassword;
      console.log(state.registerInfo, state.confirmPassword);
    },
    confirmUserPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const registerReducer = registerSlice.reducer;
export const { applyUser, confirmUserPassword } = registerSlice.actions;
