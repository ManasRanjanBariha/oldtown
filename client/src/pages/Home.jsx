import { Box } from "@mui/material";
import React from "react";
import Productcard from "../components/Productcard";
import ProductTypes from "../components/ProductTypes";
import Cousel from "../components/Cousel";

const Home = () => {
  return (
    <Box>
      <Box height={200}>
        <ProductTypes/>
      </Box>
    </Box>
  );
};

export default Home;
