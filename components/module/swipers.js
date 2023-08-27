import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Manipulation } from 'swiper';
import Card from './card';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Manipulation]);

export default function Swipers({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        // navigation={true}
        className='mySwiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card food={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
