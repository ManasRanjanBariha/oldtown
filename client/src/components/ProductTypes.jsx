import React, { useState } from "react";
import Productcard from "./Productcard";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,

} from "swiper/modules";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const GenderButton = styled(Button)(({ theme }) => ({
  fontWeight: "bolder",
  color: "secondary",
  borderColor: "black",
}));
const femaleProductTypes = [
  {
    name: "Bootcut",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
  },
  {
    name: "Slim",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
  },
  {
    name: "Skinny",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
  },
  {
    name: "Straight",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280493straight_fl.webp",
  },
  {
    name: "Skinny",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280599superskinny_fl.webp",
  },
  {
    name: "Boyfriend",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280452boyfriend_fl.webp",
  },
]
const productTypes = [
  {
    name: "Skinny",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692281091skinny_ml.webp",
  },
  {
    name: "Straight",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692281044straight_ml.webp",
  },
  {
    name: "Tappered",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692281019tapered_ml.webp",
  },
  {
    name: "Slim",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692281067slim_ml.webp",
  },
  {
    name: "Bootcut",
    image:
      "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692281067slim_ml.webp",
  },
];

const ProductTypes = () => {
  const [male, setMale] = useState(true);
  return (
    <Stack
      display={"flex"}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
      alignItems={"center"}
      // height={"150px"}
      width={"90vw"}
    >
      <Box textAlign={"center"} flex={2}>
        <Typography variant="h4">Find Your Fit</Typography>
        <Box>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
            color="secondary"
            border="2"
            bordercolor="secondary"
          >
            <GenderButton
              onClick={() => {
                setMale(true);
              }}
              color={male ? "error" : "secondary"}
            >
              Male
            </GenderButton>
            <GenderButton
              onClick={() => {
                setMale(false);
              }}
              color={male ? "secondary" : "error"}
            >
              Female
            </GenderButton>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography variant="p">
            Find your next denim among a wide range
          </Typography>
          <Typography>
            oftimeless denim washes, icons of low impact style,
          </Typography>
          <Typography> better for people and the planet.</Typography>
        </Box>
      </Box>

      {!male && (
        <Box width={"100%"}>
          <Swiper 
            modules={[ Navigation, Scrollbar,Autoplay]}
            spaceBetween={0}
            slidesPerView={5}
            autoplay={true}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("Working")}
          >
            {femaleProductTypes.map((e) => {
              return (
                <SwiperSlide key={e.image}>
                  <Box maxHeight={"5%"}>
                  <Productcard  name={e.name} image={e.image} />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      )}
            
      {male && (
        <Box width={"100%"} >
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {productTypes.map((e) => {
              return (
                <SwiperSlide key={e.name}>
                  <Productcard name={e.name} image={e.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      )}
      
    </Stack>
  );
};

export default ProductTypes;
