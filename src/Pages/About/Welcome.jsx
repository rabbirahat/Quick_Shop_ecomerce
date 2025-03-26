import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import slick-carousel core styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

const Welcome = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
      <div className="md:col-span-1">
        <img 
          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" 
          alt="Welcome to Nest" 
          className="rounded-lg w-full"
        />
      </div>
      
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Nest</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600">
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing.
        </p>
      </div>
      
      <div className="md:col-span-3">
        <Slider {...settings} className="w-full">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="px-2">
              <img 
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" 
                alt={`Slide ${item}`}
                className="rounded-lg w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Welcome;