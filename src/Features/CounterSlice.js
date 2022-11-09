import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state) => {
      state.value += 2;
    },
    sub: (state) => {
      state.value -= 2;
    },
    multiply: (state) => {
      state.value *= 3;
    },
    divide: (state) => {
      state.value /= 2;
    },
  },
});
export const { increment, decrement, add, sub, multiply, divide } =
  counterSlice.actions;
export default counterSlice.reducer;
