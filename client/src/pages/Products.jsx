import React from 'react'
import ProductStyle from '../components/productComponents/ProductStyle'

import NavBar from "../components/navbarComponents/NavBar";
import DropDown from '../components/productComponents/DropDown';
import ProductList from '../components/productComponents/ProductList';

const Products = () => {
  return (
    <div>
      <NavBar/>
      <DropDown/>
      {/* <ProductList/> */}
      {/* <ProductStyle/> */}
    </div>
  )
}

export default Products
