import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

library.add(faPiggyBank);

const Icono = ({ nombre, color, tamaño }) => {
  return <FontAwesomeIcon icon={nombre} color={color} size={tamaño} />;
};

export default Icono;