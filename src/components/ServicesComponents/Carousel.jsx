import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const Carousel = ({ children: slides, index = 0, autoSlide = false, autoSlideInterval = 5000 }) => {
  
  const [curr, setCurr] = useState(index)
  const [autoSlideClick, setAutoSlideClick] = useState(autoSlide);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const prevClick = () => {
    autoSlide && setAutoSlideClick(false);
    prev();
  };

  const nextClick = () => {
    autoSlide && setAutoSlideClick(false);
    next();
  };

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
          <button onClick={prevClick} className="p-1  text-gray-800">
            <ArrowLeft />
          </button>
          <button onClick={nextClick} className="p-1 = text-gray-800">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;