import React from 'react';
import Slider from 'react-slick';
import './HomeCarousel.scss';

function HomeCarousel() {
  const bannerData = [
    {
      src: 'http://sieuthithucphamamazing.com/upload/hinhanh/1288243878102650.png',
    },
    {
      src: 'http://sieuthithucphamamazing.com/upload/hinhanh/5535829208799670.jpg',
    },
  ];
  const renderSliderItem = (items) =>
    items.map((item, idx) => (
      <div key={`home-banner-${idx}`} className='homeCarousel__item'>
        <img src={item.src} alt={`banner-${idx}`} />
      </div>
    ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='homeCarousel'>
      <div className='homeCarousel__wrapper container-fluid'>
        <Slider {...settings}>{renderSliderItem(bannerData)}</Slider>
      </div>
    </div>
  );
}

export default HomeCarousel;
