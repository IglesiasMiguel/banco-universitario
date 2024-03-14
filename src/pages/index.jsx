import { createBrowserRouter } from "react-router-dom";

import HomePage from "./Home";
import ContactPage from "./Contact";
import LoginPage from "./LogIn";
import ServicesPage from "./Services";
import AboutUsPage from "./About-us";
import SignupPage from "./SignUp";

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
  },
  {
    path: "/About-us",
    element: <AboutUsPage />
  },
  {
    path: "/SignUp",
    element: <SignupPage />
  },
]);

export default router;

