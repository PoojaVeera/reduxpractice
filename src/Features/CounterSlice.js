import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state) => {
      state.value += 2;
    },
    decrement: (state) => {
      state.value -= 2;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
