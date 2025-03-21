import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/1200x500?text=Big+Sale+50%25+Off",
      title: "Big Sale 50% Off",
      description: "Limited Time Offer on Top Brands!",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1200x500?text=New+Arrivals",
      title: "New Arrivals",
      description: "Discover the latest trends in fashion & tech.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1200x500?text=Free+Shipping",
      title: "Free Shipping",
      description: "On orders above $100. Shop now!",
    },
  ];

  return (
    <div className=" mt-1">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarosel;
