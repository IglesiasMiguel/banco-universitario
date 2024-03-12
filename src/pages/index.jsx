import { createBrowserRouter } from "react-router-dom";

import HomePage from "./Home";
import ContactPage from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

export default router;

