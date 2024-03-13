import { useState, useReducer } from "react";

import Carousel from "./Carousel";

import dataServicesDescription from "../../data/dataServicesDescription";

const initialState = 0;

const indexReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return state === dataServicesDescription.length - 1
        ? 0
        : state + 1;
    case "PREV":
      return state === 0
        ? dataServicesDescription.length - 1
        : state - 1; 
    case "SET_INDEX":
      return action.payload
    default:
      return state;
  }
};

const ServicesSection = () => {
  
  const [index, dispatch] = useReducer(indexReducer, initialState);

  const autoSlide = false;
  const [autoSlideClick, setAutoSlideClick] = useState(true);

  const nextService = () => {
    (autoSlide && autoSlideClick) && setAutoSlideClick(false);
    dispatch({ type: "NEXT" });
  };

  const prevService = () => {
    (autoSlide && autoSlideClick) && setAutoSlideClick(false);
    dispatch({ type: "PREV" });
  };

  const setIndex = (newIndex) => {
    dispatch({
      type: "SET_INDEX",
      payload: newIndex
    });
  }

  return (
    <div
      className="flex md:flex-row flex-col bg-[#ebecf0] justify-center items-center"
    >
      <div
        id="servicesName"
        className="grid md:grid-cols-2 xs:grid-cols-1 justify-center items-center mx-[5rem] pt-[5rem] md:w-3/5 xs:w-full"
      >
        {dataServicesDescription.map((item, i) => (
          <div
            key={i}
            className="flex flex-col pb-[5rem] max-w-[85%]"
          >
            <span
              className="text-[#085f63] text-lg font-MontserratBlack underline underline-offset-4"
            >
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </span>
            <button
              className="text-left"
              onClick={() => {
                setIndex(i)
              }}
            >
              <h3
                className="text-2xl font-MontserratBlack cursor-pointer"

              >
                {item.title}
              </h3>
            </button>
          </div>
        ))}
      </div>
      <div
        id="serviceCarousel"
        className="md:w-2/5 w-[100%]"
      >
        <Carousel
          index={index}
          autoSlide={autoSlide}
          autoSlideClick={autoSlideClick}
          prev={prevService}
          next={nextService}
        >
          {[...dataServicesDescription.map((item, i) => (
            <div
              key={i}
              id="carousel"
              className="flex flex-col justify-between min-h-[600px] min-w-full"
            >
              <div
                id="main-container"
              >
                <div
                  id="image-container"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px]"
                  />
                </div>
                <div
                  id="text-description"
                  className="space-y-2 ml-[4rem] mr-[3rem] mt-[5rem]"
                >
                  <span
                    className="text-[#085f63] text-lg font-MontserratBlack underline underline-offset-4"
                  >
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <h3
                    className="text-2xl font-MontserratBlack"
                  >
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                id="arrow-buttons"
                className="flex flex-row justify-between ml-[4rem] mr-[3rem] mt-5 mb-8"
              >
                <div
                  className="flex flex-col"
                >
                  <span
                    className="text-sm"
                  >
                    {dataServicesDescription[index === 0 ? dataServicesDescription?.length - 1 : index - 1].title}
                  </span>
                </div>

                <div
                  className="flex flex-col items-end"
                >
                  <span
                    className="text-sm"
                  >
                    {dataServicesDescription[index === dataServicesDescription?.length - 1 ? 0 : index + 1].title}
                  </span>
                </div>
              </div>
            </div>
          ))]}
        </Carousel>
      </div>
    </div>
  );
};


export default ServicesSection;