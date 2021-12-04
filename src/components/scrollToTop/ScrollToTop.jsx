import React from 'react';
import arrowTop from '../../assets/images/arrow-top.png';
import './ScrollToTop.scss';
function ScrollToTop() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='scrollToTop' onClick={scrollTop}>
      <img src={arrowTop} alt='arrow' />
    </div>
  );
}

export default ScrollToTop;
