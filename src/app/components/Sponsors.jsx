import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import { Images } from '../data';

SwiperCore.use([Autoplay]);
const Sponsors = (props) => {
    return (
        <div className={`flex bg-blue-100 justify-center items-center gap-4 w-full h-[150px] max-sm:h-[50px] ${!props.showForum && 'py-2'}`}>
            {Images && <Swiper
                spaceBetween={50}
                loopedSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                slidesPerView={4}
                breakpoints={{
                    640: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay]}

            >
                {Images?.map((image) => (
                    <SwiperSlide key={image.url}
                        className={`h-[150px] max-sm:h-[50px] max-sm:w-[100px] flex items-center ${!props.showForum && ' max-sm:h-[42px] max-sm:w-[42px]'}`}
                    >
                        <Image className={` object-contain max-sm:h-[50px] w-[100px]  ${!props.showForum && 'max-sm:rounded-full max-sm:border-red-600 max-sm:border-2  max-sm:h-[42px] max-sm:w-[42px]'}`} src={image.url}
                            width={150} height={80}
                            sizes="(max-width: 768px) 100px, 50px, (max-width: 1200px) 150px, 80px"
                            alt='prestige' />
                    </SwiperSlide>
                ))}

            </Swiper>}


        </div>
    )
}

export default Sponsors