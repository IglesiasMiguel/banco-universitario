import React from 'react';

const CTA = ({ title, buttonText }) => {
  return (
    <div className="flex flex-col items-center my-32">
      <h2 className="text-3xl font-extrabold my-10">
        {title}
      </h2>
      <button className="bg-primary-color hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  );
};

export default CTA;
