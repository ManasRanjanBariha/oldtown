import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Cousel = () => {
  return (
   <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
    </Swiper>
  )
}

export default Cousel