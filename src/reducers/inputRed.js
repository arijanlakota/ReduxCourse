import { createSlice } from "@reduxjs/toolkit";

export const inputRed = createSlice({
  name: "inputer",
  initialState: {
    firstName: "",
    lastName: "",
    age: 0,
  },
  reducers: {
    firstChange: (state, newState) => {
      state.firstName = newState;
    },
    lastChange: (state, newState) => {
      state.lastName = newState;
    },
    ageChange: (state, newState) => {
      state.age = newState;
    },
  },
});
export const {ageChange,lastChange,firstChange} = inputRed.actions
export default inputRed.reducer