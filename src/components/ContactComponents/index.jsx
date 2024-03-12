import React from "react";


import Subtitle from "./Subtitle";
import ContactForm from "./Form";

const Contact = () => {

  return (
    <div
      id="Contacto"
      className="grid md:grid-cols-2 grid:cols-1 md:space-x-6" 
    >
      <div id="contact-form" className="md:ml-[10rem] md:mr-[2rem] flex flex-col items-center md:items-start mt-[4rem]">
        <h2 className="xl:text-6xl lg:text-5xl xs:text-6xl text-4xl md:text-3xl font-extrabold text-center md:text-start my-10 leading-smug uppercase">
          Contáctanos y aclara tus dudas
        </h2>

        <ContactForm />
      </div>

      <div
        id="data-bank"
        className="bg-[#ebecf0] py-10 md:mr-20 md:pl-10 flex flex-col md:items-end items-center justify-center space-y-8"
      >

        <Subtitle
          title="Ubicación"
          description="Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela."
        />

        <Subtitle
          title="Horario de trabajo"
          description="Lunes a Viernes de 8:00 am a 5:00 pm"
        />

        <Subtitle
          title="Atención al cliente"
          description="info@bancouniversitario.com.ve"
        >
          <div className="space-x-2">
            <span className="font-bold">
              ES
            </span>
            <span>
              • 58 212-555-5555
            </span>
          </div>
        </Subtitle>

      </div>
    </div>
  );
};

export default Contact;