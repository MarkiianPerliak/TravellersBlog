import style from "./Slider.module.css";
import { Container } from "../../../../components/Container/Container.jsx";
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { getAPI } from "../../../../API/Slider/getAPI"
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

export const Slider = () => {
    const [img, setImg] = useState([])

    useEffect(() => {
        getAPI().then(data => setImg(data))
    }, [])
    return (
        <div className={style.slider}>
            <Container>
                
            
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map(item => {
                    return <SwiperSlide><img className={style.slider__image} src={item.largeImageURL} alt="" /></SwiperSlide>
                })}
                ...
            </Swiper>
            </Container>
        </div>
    )
}