import React from 'react';
import Boton from './Boton';
const Hero = ({ imageUrl, title, text}) => {
    return (
        <div className="grid grid-cols-2 gap-4 m-10 flex items-center mx-20 my-20">
        <div className="col-span-1">
          <div className="col-span-1 flex flex-col mx-10">
            {/* Título */}
            <h1 className="text-5xl font-bold my-4">{title}</h1>
            {/* Texto */}
            <p className="mt-2 text-lg">{text}</p>
            <Boton buttonText="Contactar" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="white" />
          </div>
        </div>
          {/* Contenido a la derecha */}
          <img src={imageUrl} alt="Imagen" className="w-4/5 h-auto mx-10" />
        </div>
      );
    };

export default Hero;