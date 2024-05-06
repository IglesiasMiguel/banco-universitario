import React from 'react';
import { Link as LinkRouter, useLocation } from "react-router-dom";

const CTA = ({ title, buttonText }) => {
  return (
    <div className="flex flex-col items-center my-32">
      <h2 className="text-3xl font-extrabold my-10 text-center">
        {title}
      </h2>
      <LinkRouter to="http://localhost:8000/sign-up" >
        <button className="bg-primary-color hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </LinkRouter>
    </div>
  );
};

export default CTA;
