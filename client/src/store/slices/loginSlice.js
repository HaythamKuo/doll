import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginInfo: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.loginInfo = { ...action.payload };
      //console.log(state.loginInfo);
    },

    clearUser: (state, action) => {},
  },
});

export const loginReducer = loginSlice.reducer;
export const { setUser, clearUser } = loginSlice.actions;
