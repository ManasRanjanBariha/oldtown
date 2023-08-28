import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SmallCard from "./SmallCard";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Container, Stack } from "@mui/material";

const SmallCardCrousel = () => {
  const arr = [1, 2, 3, 4, 5, 7, 8, 9];
  return (
    <Stack display={"block"}>
      <Container>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          autoplay={true}
          navigation
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log("Working")}
        >
          {arr.map((e) => {
            <SwiperSlide key={e}>
              <SmallCard />
            </SwiperSlide>;
          })}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default SmallCardCrousel;