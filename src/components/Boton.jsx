import React from 'react';

const Boton = ({ buttonText, buttonColor, buttonHoverColor, colorText}) => {
  const buttonStyle = `bg-${buttonColor} hover:bg-${buttonHoverColor} text-${colorText} font-bold py-2 px-4 rounded`;

  return (
    <div className="flex flex-col items-center">
      <button className={buttonStyle}>
        {buttonText}
      </button>
    </div>
  );
};

export default Boton;
