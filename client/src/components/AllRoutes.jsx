import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Test from './Test'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test1' element={<Test/>}/>
        <Route path='/Products' element={<Products/>}/>
    </Routes>
  )
}

export default AllRoutes