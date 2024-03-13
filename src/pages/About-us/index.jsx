import React from "react";

import Nav from "../../components/Nav";
import ListadoServicios from "../../components/ListadoServicios";
import ImageCard from "../../components/ImageCard";
import ImageCard2 from "../../components/ImageCard2";
import Testimonial from "../../components/Testimonial";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer"
import Hero from "../../components/Hero";
import dataServices from "../../data/dataServices";

const AboutUsPage = () => {
  return (
    <div>
      <Nav />
      <Hero 
        imageUrl="./src/assets/images/aboutus.png"
        title="Comprometidos con potenciar tu economía"
        text="Nos comprometemos con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Queremos facilitar la gestión de tus recursos y contribuir a tu crecimiento económico y personal."
        buttonText="Contactar"
      />
      <ImageCard
        imageUrl="./src/assets/images/services1.png"
        title="Servicio eficiente"
        text="Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial."
        showIcon={false}
      />
      <ImageCard2
        imageUrl="./src/assets/images/services2.png"
        title="Educación financiera"
        text="Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito"
        showIcon={false}
      />
       <ImageCard
        imageUrl="./src/assets/images/services3.png"
        title="Alianzas estrátegicas"
        text="Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros."
        showIcon={false}
     />
      <Cta
        title="Crea una cuenta en nuestra banca en línea"
        buttonText="Registrarse"
      />
      <Footer />
    </div>
  );
};

export default AboutUsPage;