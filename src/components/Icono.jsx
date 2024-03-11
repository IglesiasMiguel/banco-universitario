import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Icono = ({ icono, color, tamaño }) => {
    return (
      <div style={{ color: color, fontSize: tamaño }}>
        <FontAwesomeIcon icon={icono} />
      </div>
    );
  }

export default Icono;