import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button onClick={() => navigate("/Page1")}>click me </button>
    </div>
  );
};
