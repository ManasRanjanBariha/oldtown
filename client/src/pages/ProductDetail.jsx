import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import ProductPost from "../components/ProductPost";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../styles/productdetails.css";

const image =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:900)/product/410373676009/665/410373676009_1_7098.webp";
const ProductDetail = () => {
  return (
    <Box>
      <Stack
        direction={{md:"column",lg:"row"}}
        sx={{direction:{md:"column",lg:"row"}}}
        display={"flex"}
        height={"100vh"}
        width={"90%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div className="col">
          <div className="slider">
            <div className="product">
              <img src={image} />
              <img src={image} />
              <img src={image} />
              <img src={image} />
            </div>
            <div className="preview">
              <img src={image} />
            </div>
          </div>

        </div>
        <div className="col">

                <div className="content">
                    <p className="brand">Brand: Varanga</p>
                    <h2>Woman Black Quirky Print Empire Dress</h2>
                    <div className="rating">
                        
                    </div>
                    <p className="price">Brand: Varanga</p>
                    <p>Size: <select name="size">

                            <option value="select size">select size</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>

                        </select></p>
                    <p>Quantity: <input type="text" value="1"/></p>
                    <button type="button">
                       
                        Add to cart</button>
                </div>

            </div>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
