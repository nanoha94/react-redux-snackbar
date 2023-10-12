import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default Router;
