import React from 'react';
import './HomeAds.scss';
function HomeAds({ image }) {
  return (
    <div className='homeAds'>
      <div className='container'>
        <img src={image} alt='Ads' />
      </div>
    </div>
  );
}

export default HomeAds;
