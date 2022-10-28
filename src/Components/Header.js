import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/Page2">Page2</Link>
      <Link to="/Page3">Page3</Link>
    </div>
  );
};
