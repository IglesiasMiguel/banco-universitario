import React from 'react';
import Boton from './Boton';
const Hero2 = ({ imageUrl, title}) => {
    return (
        <div className="grid grid-cols-1 gap-4 m-10 items-center justify-center">
          {/* Título y botón */}
          <div className="text-center mx-auto">
            <h1 className="text-5xl font-bold my-4">{title}</h1>
            <div className="inline-block float-center my-4">
            <Boton
              buttonText="Contactar"
              buttonColor="primary-color"
              buttonHoverColor="teal-700"
              colorText="white"
            />
            </div>
          </div>
          {/* Imagen */}
          <img src={imageUrl} alt="Imagen" className="w-4/5 h-auto mx-auto" />
        </div>
      );
    };

export default Hero2;