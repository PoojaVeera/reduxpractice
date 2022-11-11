import { Button } from "@progress/kendo-react-buttons";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <br />
      <Button onClick={() => navigate("/Page1")}>
        click for mathematical operations
      </Button>
    </div>
  );
};
