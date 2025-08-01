import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPiggyBank, faMoneyBill, faSackDollar, faMoneyBillTransfer, faSchool, faClock, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faPiggyBank, faMoneyBill, faSackDollar, faMoneyBillTransfer, faSchool, faClock, faQuoteLeft);

const Icono = ({ nombre, color, tamaño }) => {
    return <FontAwesomeIcon icon={nombre} color={color} size={tamaño} />;
};

export default Icono;