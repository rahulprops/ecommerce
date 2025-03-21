import React, { useRef, useState, useEffect } from "react";
import HomeSectionCard from "./HomeSectionCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const products = [
  { id: 1, title: "Product 1", price: "$50" },
  { id: 2, title: "Product 2", price: "$60" },
  { id: 3, title: "Product 3", price: "$70" },
  { id: 4, title: "Product 4", price: "$80" },
  { id: 5, title: "Product 5", price: "$90" },
  { id: 6, title: "Product 6", price: "$100" },
];

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Function to check scroll position and update button states
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Scroll left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Update scroll position on scroll
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Left Arrow (Disabled if at start) */}
      <button
        onClick={scrollLeft}
        disabled={isAtStart}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200 ${
          isAtStart ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Product Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scroll-smooth gap-6 px-6 scrollbar-hide"
      >
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/4 flex-shrink-0">
            <HomeSectionCard title={product.title} price={product.price} />
          </div>
        ))}
      </div>

      {/* Right Arrow (Disabled if at end) */}
      <button
        onClick={scrollRight}
        disabled={isAtEnd}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200 ${
          isAtEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FiChevronRight size={28} />
      </button>
    </div>
  );
};

export default HomeSectionCarousel;
