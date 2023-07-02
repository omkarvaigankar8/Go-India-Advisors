'use client'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import { stockData } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);
const StockRates = () => {
    const [stocks, setStocks] = useState(stockData);

    return (
        <div className='text-black  flex justify-center items-center gap-2'>
            {stocks && <Swiper
                loopedSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                slidesPerView={1.6}
                breakpoints={{
                    640: {
                        slidesPerView: 1.6,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay]}
            >
                {stocks?.map((stock) => (
                    <SwiperSlide key={stock.name} className='flex gap-10  py-1'>
                        <div className='flex justify-center items-center gap-4'>
                            <span className=' text-white'>{stock.name}</span>
                            <span className=" text-white">{stock.value}</span>
                        </div>
                        <span className={`${stock.ascending ? 'text-green-500' : ' text-red-500'}`}>{stock.percentage}</span>
                    </SwiperSlide>
                ))}

            </Swiper>}


        </div>
    )
}

export default StockRates