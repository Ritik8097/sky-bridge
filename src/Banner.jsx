import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Sliding() {
  // Determine if the screen is mobile or desktop
  const isMobile = window.innerWidth < 768;

  // Mobile and desktop images
  const mobileImages = [
   
   "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Empowering_Visionaries_Transforming_Futures.jpg?v=1725253607",
     "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Empowering_Visionaries_Transforming_Futures.jpg?v=1725253607"
    
  ];

  const desktopImages = [

"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Empowering_Visionaries_Transforming_Futures.jpg?v=1725253607",
  "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Empowering_Visionaries_Transforming_Futures.jpg?v=1725253607"
  ];

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <>
      {/* Slider */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img loading='lazy' className="w-full" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
