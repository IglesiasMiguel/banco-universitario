import React from 'react';
import Icono from './Icono';

const Testimonial = ({ nombre, cargo, texto, fotoUrl }) => {
  return (
    <div className="flex items-center justify-center space-x-4 my-20 mx-40">
      {/* Contenido del lado izquierdo */}
      <div className="flex-shrink-0 w-1/8 text-center">
        <img src={fotoUrl} alt={nombre} className="w-16 h-16 rounded-full mx-auto" />
      </div>
      <div className="flex-shrink-0 w-2/8 text-center">
        <p className="text-lg font-bold">{nombre}</p>
        <p className="text-sm">{cargo}</p>
      </div>

      {/* Contenido del lado derecho */}
      <div className="flex-shrink-0 w-1/8 items-start">
        <Icono nombre="fa-quote-left" color="#49BEB7" tamaño="2x" />
      </div>
      <div className="w-4/8">
        <p className="text-lg">{texto}</p>
      </div>
    </div>
  );
};

export default Testimonial;
