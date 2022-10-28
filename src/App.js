import React from "react";
import { Routes, Route } from "react-router-dom";
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import { Page3 } from "./Pages/Page3";

import "./App.scss";
import { Layout } from "./Components/Layout";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
