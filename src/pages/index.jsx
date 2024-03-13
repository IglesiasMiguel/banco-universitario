import { createBrowserRouter } from "react-router-dom";

import HomePage from "./Home";
import ContactPage from "./Contact";
import LoginPage from "./LogIn";
import ServicesPage from "./Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  
  {
    path: "/LogIn",
    element: <LoginPage />
  },
  {
    path: "/services",
    element: <ServicesPage />
  }
  
]);

export default router;

