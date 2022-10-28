import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./Features/timeSlice";
import counterReducer from "./Features/CounterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    time: timeReducer,
  },
});
