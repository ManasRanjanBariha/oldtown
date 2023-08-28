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
import SmallCard from "./homeComponents/SmallCard";
import SmallCardCrousel from "./homeComponents/SmallCardCrousel";

const Test = () => {
  return (
    <>
      <SmallCardCrousel />
    </>
  );
};

export default Test;
