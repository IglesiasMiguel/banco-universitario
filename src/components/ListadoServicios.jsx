import React from 'react';
import Servicio from './Servicio';
const ListadoServicios = ({ servicios }) => {
  return (
    <div>
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