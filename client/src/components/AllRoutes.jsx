import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "./Test";
import Login from "../pages/Login";
import Footer from "./Footer";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test1" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
