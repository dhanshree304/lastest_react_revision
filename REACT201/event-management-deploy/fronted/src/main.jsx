import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";

import CorporEve from "./Pages/CorporEve";
// import Services from "./Pages/Services";
import Weedings from "./Pages/Weedings";
import Landing from "./Pages/Landing";
import Navbar from "./Comps/Navbar";
import Contact from "./Pages/Contact";

import Services2 from "./Pages/Services2";
import Services3 from "./Pages/Services3";
import Footer from "./Comps/Footer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/corporate-events",
    element: <CorporEve />,
  },
  // {
  //   path: "/services",
  //   element: <Services />,
  // },
  {
    path: "/weedings",
    element: <Weedings />,
  },
  
  {
    path: "/destination-weddings",
    element: <Services2 />,
  },
  {
    path: "/eng&reception",
    element: <Services3 />,
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />

    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
