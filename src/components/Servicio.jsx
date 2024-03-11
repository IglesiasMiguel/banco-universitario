import React from 'react';
import Icono from './Icono';

const Servicio = ({ icono, titulo, texto }) => {
  return (
    <div className="flex flex-col items-center">       
       <Icono nombre={icono} color="#49BEB7" tamaño="2x" />
      <h3 className="text-xl font-bold mt-4">{titulo}</h3>
      <p className="text-center mt-2">{texto}</p>
    </div>
  );
};

export default Servicio;