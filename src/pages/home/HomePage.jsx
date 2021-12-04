import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HomeAds from './ads/HomeAds';
import HomeCarousel from './carousel/HomeCarousel';
import './HomePage.scss';
import HomeProducts from './products/HomeProducts';
function HomePage() {
  return (
    <div className='homePage'>
      <Header />
      <div className='homePage__wrapper'>
        <HomeCarousel />
        <HomeProducts />
        <HomeAds image='http://sieuthithucphamamazing.com/thumb/1231x201/1/upload/product/808525249210/thit-sach.png' />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
