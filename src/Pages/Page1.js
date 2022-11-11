import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  add,
  sub,
  multiply,
  divide,
} from "../Features/CounterSlice";
import { handleAnswer } from "../Features/timeSlice";
import { Button } from "@progress/kendo-react-buttons";
export const Page1 = () => {
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  const b = useSelector((state) => state.time.value);
  const answer = useSelector((state) => state.counter.value);
  const addanswer = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(handleAnswer());
    console.log(num);
  };
  return (
    <div>
      <br />
      <input
        placeholder="enter number"
        type="number"
        onChange={(e) => setNum(e.target.value)}
      />
      <Button onClick={handleSubmit}>submit</Button>
      <br />
      <Button themeColor={"primary"} onClick={() => dispatch(increment())}>
        +
      </Button>
      <h1>counter:{answer}</h1>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <br />
      the time is {b}
      <br />
      <Button onClick={() => navigate(-1)}>back home </Button>
      <br />
      <br />
      <br />
      <Button onClick={() => dispatch(add(num))}>add</Button>
      <Button onClick={() => dispatch(sub(num))}>sub</Button>
      <Button onClick={() => dispatch(multiply(num))}>multiply</Button>
      <Button onClick={() => dispatch(divide(num))}>divide</Button>
    </div>
  );
};
