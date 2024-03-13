import { createBrowserRouter } from "react-router-dom";

import HomePage from "./Home";
import ContactPage from "./Contact";
import LoginPage from "./LogIn";
import AboutUsPage from "./About-us";

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
    path: "/About-us",
    element: <AboutUsPage />
  }
]);

export default router;

