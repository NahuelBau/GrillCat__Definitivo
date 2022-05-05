import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import './PrincipalRouter.css'

import { Home } from "./../pages/Home/Home";
import { Equipos } from "./../pages/Equipos/Equipos";
import { Navbar } from "./../Components/ui/Navbar";
import { MasInfo } from './../pages/MasInformacion/MasInfo';
import { CrearEquipo } from './../pages/CrearEquipo/CrearEquipo';
import { Resumen } from './../pages/Resume/Resumen';
import { Equipo } from "../pages/Equipos/Equipo(1)/Equipo";

export const PrincipalRouter = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/crear-equipo" element={<CrearEquipo />} />
        <Route path="/resumen" element={<Resumen />} />
        
        <Route path="/mas-info" element={<MasInfo />} />
        <Route path="/equipos/equipo" element={<Equipo />} />
      </Routes>
    </>
  );
};
