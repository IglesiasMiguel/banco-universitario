import React from "react";

import Nav from "../../components/Nav";
import ListadoServicios from "../../components/ListadoServicios";
import ImageCard from "../../components/ImageCard";
import ImageCard2 from "../../components/ImageCard2";
import Testimonial from "../../components/Testimonial";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer"

import dataServices from "../../data/dataServices";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h2 id="Servicios" className="text-5xl font-bold my-10">Descubre nuestros servicios</h2>
        <p className="mt-2 text-lg my-10">Facilitamos la gestión de tus recursos y contribuimos a tu crecimiento económico y personal</p>
        <ListadoServicios servicios={dataServices} />
      </div>
      <ImageCard
        imageUrl="./src/assets/images/services1.png"
        title="Servicio eficiente"
        text="Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial."
        buttonText="Conócenos"
      />
      <ImageCard2
        imageUrl="./src/assets/images/services2.png"
        title="Educación financiera"
        text="Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito"
        buttonText="Conócenos"
      />
      <Testimonial
        nombre="Miguel Iglesias"
        cargo="Estudiante UCLA"
        texto="El Banco Universitario ha sido mi aliado financiero desde que ingresé a la universidad. Su enfoque en brindar soluciones financieras ágiles y eficientes realmente se refleja en la forma en que facilitan la gestión de mis recursos. La opción de transferencias entre estudiantes sin comisión ha simplificado mis transacciones, y la posibilidad de realizar depósitos y retiros en efectivo las 24 horas del día ha sido increíblemente conveniente."
        fotoUrl="./src/assets/images/services2.png"
      />
      <Cta
        title="Crea una cuenta en nuestra banca en línea"
        buttonText="Registrarse"
      />
      <Footer />
    </div>
  );
};

export default HomePage;