import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/Screen2" element={<Screen2 />} />
          <Route path="/Screen3" element={<Screen3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
