import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SmallCard from "../components/SmallCard";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Box, Container, Stack } from "@mui/material";

const SmallCardCrousel = () => {
  const arr = [1, 2, 3, 4, 5, 7, 8, 9];
  return (
    <Stack display={"flex"} justifyContent={"center"} maxHeight={45}>
      <Container>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          autoplay={true}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("Working")}
        >
          {arr.map((e) => {
            return (
              <SwiperSlide key={e}>
                <SmallCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default SmallCardCrousel;