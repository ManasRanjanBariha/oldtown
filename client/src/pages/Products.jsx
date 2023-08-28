import React from 'react'


import NavBar from "../components/navbarComponents/NavBar";
import DropDown from '../components/productComponents/DropDown';
import Footer from '../components/Footer';


const Products = () => {
  return (
    <div>
      <NavBar/>
      <DropDown/>
      <Footer/>
      {/* <ProductList/> */}
      {/* <ProductStyle/> */}
    </div>
  )
}

export default Products
