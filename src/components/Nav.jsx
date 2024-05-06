import { useState } from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-no-background.png";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Boton from './Boton';

const Nav = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#49beb7] transition">
      <ul className="text-center text-x1 p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className={`my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded ${currentPage === "/" ? "border-primary-color" : ""}`} onClick={() => handleLinkClick("/")}>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="Servicios">
          <li className={`my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded ${currentPage === "/services" ? "border-primary-color" : ""}`} onClick={() => handleLinkClick("/services")}>Servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Nosotros">
          <li className={`my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded ${currentPage === "/about-us" ? "border-primary-color" : ""}`} onClick={() => handleLinkClick("/about-us")}>Nosotros</li>
        </Link>
        <Link /*spy={true} smooth={true} to="/contact" */href="/contact">
          <li className={`my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded ${currentPage === "/contact" ? "border-primary-color" : ""}`} onClick={() => handleLinkClick("/contact")}>Contacto</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 lg:py-3 px-20 py-3 bg-white z-10">
      <header>
        <div className="h-20 flex justify-between z-50 text-black ">
          <div className="flex items-center flex-1">
            <LinkRouter to="/" >
              <img src={logo} width={250} height={250} alt="Logo" />
            </LinkRouter>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center font-normal hidden pt-2">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <LinkRouter to="/" >
                  <li className={`hover:text-[#49beb7] transition hover:border-[#49beb7] cursor-pointer ${currentPage === "/" ? "border-b-2 border-primary-color" : ""}`} onClick={() => handleLinkClick("/")}>Home</li>
                </LinkRouter>
                <LinkRouter to="/services">
                  <li className={`hover:text-[#49beb7] transition hover:border-[#49beb7] cursor-pointer ${currentPage === "/services" ? "border-b-2 border-primary-color" : ""}`} onClick={() => handleLinkClick("/services")}>Servicios</li>
                </LinkRouter>
                <LinkRouter to="/about-us">
                  <li className={`hover:text-[#49beb7] transition hover:border-[#49beb7] cursor-pointer ${currentPage === "/about-us" ? "border-b-2 border-primary-color" : ""}`} onClick={() => handleLinkClick("/about-us")}>Nosotros</li>
                </LinkRouter>
                <LinkRouter to="/contact">
                  <li className={`hover:text-[#49beb7] transition hover:border-[#49beb7] cursor-pointer ${currentPage === "/contact" ? "border-b-2 border-primary-color" : ""}`} onClick={() => handleLinkClick("/contact")}>Contacto</li>
                </LinkRouter>
              </ul>
            </div>
          </div>

          <div className="flex items-center flex-1 justify-end space-x-4">
            <LinkRouter to="http://localhost:8000"> 
              <Boton buttonText="Iniciar Sesión" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="white" />
            </LinkRouter>
            <LinkRouter to="http://localhost:8000/sign-up">
              <Boton buttonText="Registrarse" buttonColor="secondary-color" buttonHoverColor="teal-700" colorText="primary-color"/>
            </LinkRouter>
          </div>

          <div>
            {click && content}
          </div>

          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </header>
    </nav>
  )
}

export default Nav;
