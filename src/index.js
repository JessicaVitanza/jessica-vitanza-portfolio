import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Aboutme from "./routes/aboutme/Aboutme"
import Esperienze from "./routes/esperienze/Esperienze"
import Formazione from "./routes/formazione/Formazione"
import Competenze from "./routes/competenze/Competenze"
import Progetti from "./routes/progetti/Progetti"
import Contatti from "./routes/contatti/Contatti"
import Home from "./routes/home/Home";
import "./index.scss";
import Spline from '@splinetool/react-spline';


const router = createBrowserRouter(
  createRoutesFromElements(
   
    
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Home />} />
            <Route path="aboutme" element={<Aboutme />} />
            <Route path="esperienze" element={<Esperienze />} />
            <Route path="formazione" element={<Formazione />} />
            <Route path="competenze" element={<Competenze />} />
            <Route path="progetti" element={<Progetti />} />
            <Route path="contatti" element={<Contatti />} />
        </Route>
     
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
