import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { Star, StarHalf, ShoppingCart } from "@mui/icons-material";
import NavBar from "./navbarComponents/NavBar";
import "../styles/detailstyle.css";
const ProductPage = () => {
  const handleImageClick = (event) => {
    document.getElementById("imagebox").src = event.target.src;
  };
};
const img1 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373974001/665/410373974001_1_1917.webp";
const img2 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373972001/665/410373972001_1_8798.webp";
const img3 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410345130003/665/410345130003_1_4681.webp";
const img4 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373981002/665/410373981002_1_8495.webp";
const Test = () => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <Box>
      <NavBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="slider">
              <div className="product">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
              <div className="preview">
                <img src={img1} id="imagebox" alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="content">
              <Typography className="brand">Brand: Varanga</Typography>
              <Typography variant="h4">
                Woman Black Quirky Print Empire Dress
              </Typography>
              <div className="rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <Typography className="price">USD $120.00</Typography>
              <Typography>
                Size:{" "}
                <Select
                  name="size"
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                >
                  <MenuItem value="">Select size</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                </Select>
              </Typography>

              <Typography>
                Quantity: <input type="text" value="1" />
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
              >
                Add to Cart
              </Button>
            </div>
          </Grid>
        </Grid>
        {/* Related Items */}
        <div className="related">
          <Typography variant="h5">Related Items</Typography>
          <Grid container spacing={3}>
            {/* Repeat this grid for each related item */}
            <Grid item xs={6} sm={3}>
              <div className="items">
                <img src="images/item1.png" alt="" />
                <div className="details">
                  <Typography>Woman Brown Solid Biker Jacket</Typography>
                  <div className="rating">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarHalf />
                  </div>
                  <Typography>USD $120.00</Typography>
                </div>
              </div>
            </Grid>
            {/* Add more related items here */}
          </Grid>
        </div>
      </Container>
    </Box>
  );
};
export default Test;
