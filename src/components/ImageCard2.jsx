import React from 'react';

const ImageCard2 = ({ imageUrl, title, text, buttonText, showIcon}) => {
  return (
    <div className="grid grid-cols-2 gap-4 m-10 flex items-center mx-20 my-40">
    <div className="col-span-1">
      {/* Imagen a la izquierda */}
      <div className="col-span-1 flex flex-col justify-center mx-10">
        {/* Título */}
        <h2 className="text-5xl font-bold my-4">{title}</h2>

        {/* Texto */}
        <p className="mt-2 text-lg">{text}</p>

        {showIcon && (
        <button className="mt-4 font-bold text-primary-color py-2 rounded-md flex items-center">
          <span>{buttonText}</span>
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
    )}
      {!showIcon && (
        <button className="mt-4 font-bold text-primary-color py-2 rounded-md">
          {buttonText}
        </button>
      )}
      </div>
    </div>
      {/* Contenido a la derecha */}
      <img src={imageUrl} alt="Imagen" className="w-4/5 h-auto mx-10" />
    </div>
  );
};

export default ImageCard2;
