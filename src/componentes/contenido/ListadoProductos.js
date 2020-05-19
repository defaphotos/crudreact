import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Producto from "./Producto";
import Buscador from "../ui/Buscador";

const ListadoProductos = () => {
  const { productosFiltrados,productos } = useSelector((state) => state.producto);

  return (
    <div className="productos">
      {productos.length !== 0 && (
        <div className="productos__buscador">
          <Buscador />
        </div>
      )}

      <ul className="productos__listado">
        {productos.length === 0 ? (
          <p className="productos__mensaje">
            No existe ninguno producto, empieza agregando uno{" "}
            <Link to="/nuevo-producto">aquí</Link>
          </p>
        ): productosFiltrados.length === 0 && (
          <p className="productos__mensaje">
            No existe ninguno producto relacionado a la busqueda
          </p>
        )}
      
        {productosFiltrados.map((producto) => {
          return <Producto key={producto.id} producto={producto} />;
        })}
      </ul>
    </div>
  );
};

export default ListadoProductos;
