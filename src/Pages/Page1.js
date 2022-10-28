import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Features/CounterSlice";
export const Page1 = () => {
  const navigate = useNavigate();
  const b = useSelector((state) => state.time.value);

  const answer = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>counter:{answer}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      the time is {b}
      <button onClick={() => navigate(-1)}>back home </button>
    </div>
  );
};
