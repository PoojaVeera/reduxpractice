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
  },
});

export const { time } = timeSlice.actions;
export default timeSlice.reducer;
