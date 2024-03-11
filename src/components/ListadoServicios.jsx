import React from 'react';
import Servicio from './Servicio';
import Icono from './Icono';

const ListadoServicios = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Icono icono="faCoffee" color="red" tamaño="2x" />
      <Servicio
        titulo="Beneficio 1"
        texto="Texto del beneficio 1."
      />
      <Servicio
        icono={""}
        titulo="Beneficio 2"
        texto="Texto del beneficio 2."
      />
      <Servicio
        icono={""}
        titulo="Beneficio 3"
        texto="Texto del beneficio 2."
      />
      <Servicio
        icono={""}
        titulo="Beneficio 4"
        texto="Texto del beneficio 2."
      />
      <Servicio
        icono={""}
        titulo="Beneficio 5"
        texto="Texto del beneficio 2."
      />
      <Servicio
        icono={""}
        titulo="Beneficio 6"
        texto="Texto del beneficio 2."
      />
    </div>
  );
};

export default ListadoServicios;