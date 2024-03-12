import { useState } from 'react';
import logoBanco from '../assets/images/logo-no-background.png';
import { Link } from 'react-scroll';
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
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
        <Link spy={true} smooth={true} to="Contacto">
          <li className="my-4 py-4 border-b border-[#004b4f] hover:bg-[#004b4f] hover:rounded">Contacto</li>
        </Link>
      </ul>
    </div>
    </>
  return (
    <nav>
      <div className="h-10 flex justify-between z-50 text-black lg:py-5 px-20 py-4 mt-[20px]">
        <div className="flex items-center flex-1">
          <img src={logoBanco} width={250} height={250} alt="Logo"/>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center font-normal hidden">
          <div>
          <ul className="flex gap-8 mr-16 text-[18px]">
        <Link spy={true} smooth={true} to="Home">
          <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="Servicios">
          <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Nosotros">
          <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Nosotros</li>
        </Link>
        <Link spy={true} smooth={true} to="Contacto">
          <li className="hover:text-[#49beb7] transition border-b-2 border-slate-900 hover:border-[#49beb7] cursor-pointer">Contacto</li>
        </Link>
      </ul>
          </div>
        </div>

        <dix className="flex items-center flex-1 justify-end space-x-4">
          <Boton buttonText="Iniciar Sesión" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="secondary-color"/>
          <Boton buttonText="Registrarse" buttonColor="secondary-color" buttonHoverColor="teal-700" colorText="primary-color"/>
        </dix>
        
        <div>
          {click && content}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
        
    </nav>
  )
}

export default Nav;