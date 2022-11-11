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
import { Button } from "@progress/kendo-react-buttons";
export const Page1 = () => {
  const [num, setNum] = useState("");

  const navigate = useNavigate();
  const b = useSelector((state) => state.time.value);
  const answer = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (num !== "") {
      e.preventDefault();
      console.log(num);
      e.target.reset(); //to reset the input field
    } else {
      alert("enter a input");
    }
  };
  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter number"
          type="number"
          onChange={(e) => setNum(e.target.value)}
        />
        <Button type="submit">submit</Button>
      </form>
      <br />
      <Button themeColor={"primary"} onClick={() => dispatch(increment())}>
        +
      </Button>
      <h1>counter:{answer}</h1>
      <Button themeColor={"primary"} onClick={() => dispatch(decrement())}>
        -
      </Button>
      <br />
      <br />
      the time is {b}
      <br />
      <br />
      <Button onClick={() => navigate(-1)}>back home </Button>
      <br />
      <br />
      <br />
      <Button onClick={() => dispatch(add(Number(num)))}>add</Button>
      <Button onClick={() => dispatch(sub(Number(num)))}>sub</Button>
      <Button onClick={() => dispatch(multiply(Number(num)))}>multiply</Button>
      <Button onClick={() => dispatch(divide(Number(num)))}>divide</Button>
    </div>
  );
};
