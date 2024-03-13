import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const Carousel = ({ children: slides, index = 0, autoSlide = false, autoSlideClick = false, prev, next, autoSlideInterval = 5000 }) => {
  
  const [curr, setCurr] = useState(index);

  useEffect(() => {
    setCurr(index);
    if (autoSlide && autoSlideClick) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [index, autoSlideClick]);

  return (
    <div className="overflow-hidden relative bg-[#c9ebea] pb-5">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute bottom-5 right-0 left-0">
        <div className="flex items-center justify-between gap-2 ml-[4rem] mr-[3rem]">
          <button onClick={prev} className="p-1  text-gray-800">
            <ArrowLeft />
          </button>
          <button onClick={next} className="p-1 = text-gray-800">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;