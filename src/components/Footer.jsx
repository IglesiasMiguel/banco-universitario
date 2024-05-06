import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/images/banco-universitario-website-favicon-color.png';
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <img src={logoImage} alt="Banco Universitario" className="h-12 w-auto mb-2" />    
            <p className="text-sm">Banca en línea</p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center md:items-start space-y-1 md:space-y-0 md:ml-4">
              <p className="text-lg font-bold text-white mb-1">Nuestras redes</p>
              <div className="flex items-center space-x-4">
                <a href="http://facebook.com/bancouniversitariove" target="_blank" className="text-white hover:text-teal-300">
                  <FaFacebook className="text-3xl mt-2" />
                </a>
                <a href="http://x.com/bancouniversitariove" target="_blank" className="text-white hover:text-teal-300">
                  <FaTwitter className="text-3xl mt-2" />
                </a>
                <a href="http://instagram.com/bancouniversitariove" target="_blank" className="text-white hover:text-teal-300">
                  <FaInstagram className="text-3xl mt-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-300 my-8">
        <div className="flex-10">
              <ul className=" mt-2 flex gap-8 mr-16 text-[18px]">
                <LinkRouter to="/services">
                  <p className='text-sm'>
                    <li>Servicios</li>
                  </p>
                </LinkRouter>
                <LinkRouter to="/about-us">
                  <p className='text-sm'>
                    <li>Nosotros</li>
                  </p>
                </LinkRouter>
                <LinkRouter to="/contact">
                  <p className='text-sm'>
                    <li>Contacto</li>
                  </p>
                </LinkRouter>
              </ul>
            </div>
          <p className='mt-8'>&copy; 2024 Banco Universitario. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;