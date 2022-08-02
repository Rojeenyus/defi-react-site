import React from "react";
import "./App.css";
import Landing from "./Landing";
import Dex from "./Dex";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Swap from "./components/app/swap/Swap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="dex">
          <Route index element={<Swap />}></Route>;
          <Route path="swap" element={<Swap />}></Route>;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
