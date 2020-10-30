import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import Header01 from './Header01';
import Header02 from './Header02';
import image01 from './assets/MainPage/image01.jpg';
import image02 from './assets/MainPage/image02.jpg';
import image03 from './assets/MainPage/image03.jpg'

const swiper = () => {
  const params: any = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    loop: true,
    // effect: 'fade',
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...params}>
      <div>
        <Header01 />
      </div>
      <div style={{ backgroundImage: `url(${image01})`, backgroundSize: '100% 100%' }}>
        <Header02 />
      </div>
      <div style={{ backgroundImage: `url(${image02})`, backgroundSize: '100% 100%' }}>
        <Header02 />
      </div>
      <div style={{ backgroundImage: `url(${image03})`, backgroundSize: '100% 100%' }}>
        <Header02 />
      </div>
    </Swiper>
  );
};

export default swiper;
