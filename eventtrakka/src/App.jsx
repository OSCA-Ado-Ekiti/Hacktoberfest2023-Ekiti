import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";
import Event from "./pages/Event";

export default function App() {
  return (
    <div className="font-pop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<View />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </div>
  );
}
