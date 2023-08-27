import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ProductTypes from "./ProductTypes";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

import SecondCoursel from "./SecondCoursel";

const Test = () => {
  return (
    <>
      <h5>APPBar</h5>
      <ProductTypes />
      <SecondCoursel />
    </>
  );
};

export default Test;
