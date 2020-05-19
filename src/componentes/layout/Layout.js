import React from "react";
import Navegacion from './Navegacion';

const Layout = () => {
  return (
    <header className="cabecera">
      <h1 className="cabecera__titulo">CRUD REACT</h1>
      <Navegacion />
    </header>
  );
};

export default Layout;
