
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "./Test";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import { Admin } from '../pages/Admin'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test1" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:type" element={<Products />} />
      <Route path="/Productdetails" element={<ProductDetail />} />
      <Route path="/userdetail" element={<UserDetails />} />
       <Route path='/admin' element={<Admin/>}></Route>

    </Routes>
  );
};

export default AllRoutes;
