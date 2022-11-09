import { createSlice } from "@reduxjs/toolkit";

const times = new Date();
export const timeSlice = createSlice({
  name: "time",
  initialState: {
    value: times.getMinutes(),
  },
  reducers: {
    time: (state) => {
      state.value = times.getMinutes() + times.getSeconds();
    },
    handleAnswer: (state) => {
      state.value = state + 2;
    },
  },
});

export const { time, handleAnswer } = timeSlice.actions;
export default timeSlice.reducer;
