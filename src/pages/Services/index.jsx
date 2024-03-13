import React from "react";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesComponents/ServicesSection";
import Cta from "../../components/Cta";

const ServicesPage = () => {
  return (
    <div>
      <Nav />
      <Hero 
        imageUrl="./src/assets/images/servicehero.png"
        title="Conoce los servicios de Banco Univertario"
        text="Transferencias entre estudiantes sin comisión, depósitos 24/7, retiros rápidos y seguros, matrículas pagadas en línea, y becas cobradas de manera eficiente. ¡Conectamos tu educación con servicios financieros ágiles!"
        buttonText="Contactar"
      />
      <ServicesSection />
      <Cta
        title="Crea una cuenta en nuestra banca en línea"
        buttonText="Registrarse"
      />
      <Footer />
    </div>
  );
};

export default ServicesPage;