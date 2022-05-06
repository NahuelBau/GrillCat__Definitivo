import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () =>{
    setIsOpen(!isOpen);
  }



  return (
      <aside className={isOpen ? 'sidebar is-active' : 'sidebar'} onClick={handleOpen}>
        
        <div className={isOpen ? 'menu-toggle is-active' :"menu-toggle"}>
          <div className="hamburger">
            <span></span>
          </div>
        </div>

        <h3>Applicaciones.</h3>

        <nav className='menu'>
          <NavLink className= 'menu-item' to='/'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
          <NavLink className= 'menu-item' to='/equipos'><i className="bi bi-cpu-fill"></i> Equipo</NavLink>
          <NavLink className= 'menu-item' to='/crear-equipo'><i className="bi bi-cloud-plus-fill"></i> Crear Equipo</NavLink>
          <NavLink className= 'menu-item' to='/resumen'><i className="bi bi-file-text-fill"></i> Resumen</NavLink>
          <hr />

          <NavLink className= 'menu-item' to='/mas-info'><i className="bi bi-info-circle-fill"></i> Informacion del Producto</NavLink>

          <div className="position-absolute bottom-0 p-2 d-flex profile ">
            <button className="btn btn-danger" ><i className="bi bi-box-arrow-left"></i> Salir</button>
            <span>User-Test</span>
          </div>
        </nav>
      </aside>

  );
};
