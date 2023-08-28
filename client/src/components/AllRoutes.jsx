
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Test from './Test'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test1' element={<Test/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Productdetails' element={<ProductDetail/>}/>
    </Routes>
  )
}


export default AllRoutes;
