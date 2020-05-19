import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="nav-principal">
      <ul className="nav-principal__lista">
        <li className="nav-principal__item">
          <Link to="/" className="nav-principal__enlace">
            Inicio
          </Link>
        </li>
        <li className="nav-principal__item">
          <Link to="/nuevo-producto" className="nav-principal__enlace">
            Nuevo Producto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
