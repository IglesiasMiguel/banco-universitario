import React from 'react';

const Testimonial = ({ nombre, cargo, texto, fotoUrl }) => {
  return (
    <div className="flex items-center justify-center space-x-4 my-20 mx-32">
      {/* Contenido del lado izquierdo */}
      <div className="flex-shrink-0 w-1/4 text-center">
        <img src={fotoUrl} alt={nombre} className="w-16 h-16 rounded-full mx-auto" />
        <div className="flex-shrink-0 w-1/2 text-center">
          <p className="text-lg font-bold">{nombre}</p>
          <p className="text-sm">{cargo}</p>
        </div>
      </div>

      {/* Contenido del lado derecho */}
      <div className="w-3/4">
        <p className="text-lg">{texto}</p>
      </div>
    </div>
  );
};

export default Testimonial;