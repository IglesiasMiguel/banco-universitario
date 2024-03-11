import React from 'react';

const Servicio = ({ icono, titulo, texto }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl">{icono}</div>
      <h3 className="text-xl font-bold mt-4">{titulo}</h3>
      <p className="text-center mt-2">{texto}</p>
    </div>
  );
};

export default Servicio;