import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../assets/images/logo-no-background.png";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Boton from './Boton';

const Nav = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#49beb7] transition">
      <ul className="text-center text-x1 p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="Servicios">
          <li className="my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded">Servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Nosotros">
          <li className="my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded">Nosotros</li>
        </Link>
        <Link /*spy={true} smooth={true} to="/contact" */href="/contact">
          <li className="my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded">Contacto</li>
        </Link>
      </ul>
    </div>
  </>

  return (
    <nav className="sticky top-0 lg:py-3 px-20 py-3 bg-white z-10">
      <header>
        <div className="h-10 flex justify-between z-50 text-black ">
          <div className="flex items-center flex-1">
            <img src={logo} width={250} height={250} alt="Logo" />
          </div>
          <div className="lg:flex md:flex lg:flex-1 items center font-normal hidden pt-2">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <LinkRouter /*spy={true} smooth={true} to="Home"*/ to="/" >
                  <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Home</li>
                </LinkRouter>
                <LinkRouter /*spy={true} smooth={true} to="Servicios"*/ to="/services">
                  <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Servicios</li>
                </LinkRouter>
                <Link spy={true} smooth={true} to="Nosotros">
                  <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Nosotros</li>
                </Link>
                <LinkRouter /*spy={true} smooth={true} to="/contact" */ to="/contact">
                  <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Contacto</li>
                </LinkRouter>
              </ul>
            </div>
          </div>

          <div className="flex items-center flex-1 justify-end space-x-4">
            <Boton buttonText="Iniciar Sesión" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="white"/>
            <Boton buttonText="Registrarse" buttonColor="secondary-color" buttonHoverColor="teal-700" colorText="primary-color"/>
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