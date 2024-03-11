import React from 'react';
import Icono from './Icono';

const Servicio = ({ icono, titulo, descripcion }) => {
    return (
        <div className="flex flex-col items-center my-5">
            <Icono nombre={icono} color="#49BEB7" tamaño="2x" />
            <h3 className="text-xl font-extrabold mt-4">{titulo}</h3>
            <p className="text-center mt-2">{descripcion}</p>
        </div>
    );
};

export default Servicio;