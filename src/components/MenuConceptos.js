import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html (no recomendado) </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <span>Enlaces con NavLink </span>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
          <NavLink activeclassname="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <span>Parámetros</span>
          <Link to="/user/martin">Martín</Link>
          <Link to="/user/mu">Mu</Link>
        </li>
        <li>
          <span>Parámetros de consulta</span>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Rutas anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
