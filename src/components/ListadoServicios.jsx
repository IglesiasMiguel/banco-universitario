import React from 'react';
import Servicio from './Servicio';
const ListadoServicios = ({ servicios }) => {
  return (
    <div className="grid grid-cols-3 mx-40">
      {servicios.map((servicio, index) => (
        <Servicio
          key={index}
          icono={servicio.icono}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
        />
      ))}
    </div>
  );
}
export default ListadoServicios;