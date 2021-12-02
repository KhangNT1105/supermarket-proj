import React from 'react';
import Header from '../../components/header/Header';
import HomeCarousel from './carousel/HomeCarousel';
import './HomePage.scss';
function HomePage() {
  return (
    <div className='homePage'>
      <Header />
      <div className='homePage__wrapper'>
        <HomeCarousel />
      </div>
    </div>
  );
}

export default HomePage;
