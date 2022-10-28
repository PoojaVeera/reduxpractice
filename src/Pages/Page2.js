import React from "react";
import { useSelector } from "react-redux";
export const Page2 = () => {
  const b = useSelector((state) => state.time.value);
  const a = useSelector((state) => state.counter.value);
  return (
    <div>
      count value is {a}
      <br />
      time is {b}
    </div>
  );
};
