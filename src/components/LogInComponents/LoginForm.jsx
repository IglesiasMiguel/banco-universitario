import React, { useState } from 'react';
import Input from '../Input';
import Boton from '../Boton';
import Panel from '../Panel';
import logo from '../../assets/images/logo-blanco.png';
import { Link as LinkRouter } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return (
    <div className="bg-ternary-color h-screen flex justify-center items-center">
      <header>
        <div className="absolute top-0 left-0 flex items-center flex-1 my-2 mx-2">
          <LinkRouter to="/">
            <img src={logo} width={250} height={250} alt="Logo" />
          </LinkRouter>
        </div>
      </header>
      <Panel className="w-80 h-64" title="¡Bienvenido, a Banco Universitario!" >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              title="Correo electrónico"
              placeholder="Ingrese su correo"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              id="password"
              title="Contraseña"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center flex-1 justify-end space-x-4">
            <LinkRouter to="/SignUp">
              <Boton buttonText="Registrarse" buttonColor="secondary-color" buttonHoverColor="teal-700" colorText="primary-color" />
            </LinkRouter>
            <Boton buttonText="Ingresar" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="white" />
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default LoginForm;