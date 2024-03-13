import React from "react";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesComponents/ServicesSection";
import Cta from "../../components/Cta";

const ServicesPage = () => {
  return (
    <div>
      <Nav />
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