import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  seleccionarProductoAction,
  eliminarProductoAction,
} from "../../actions/productoAction";

const Producto = ({ producto }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { nombre, precio, descripcion, estado, tipo } = producto;

  const formateador = new Intl.NumberFormat('de-DE', { currency: 'USD',minimumFractionDigits:0 })


  const editarProducto = (producto) => {
    dispatch(seleccionarProductoAction(producto));
    history.push("/editar-producto");
  };

  const eliminar = (id) => {
    Swal.fire({
      title: "¿Deseas eliminar?",
      text: "No vas a poder revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(eliminarProductoAction(id));
      }
    });
  };

  return (
    <li className="producto-item">
      <div className="producto-item__contenido">
        {
          {
            comida: (
              <i className="producto-item__img fas fa-utensils fa-7x producto-item__img--azul"></i>
            ),
            limpieza: (
              <i className="producto-item__img fas fa-pump-soap fa-7x producto-item__img--gris"></i>
            ),
            ropa: <i className="producto-item__img fas fa-tshirt fa-7x"></i>,
          }[tipo]
        }
        <div className="producto-item__info">
          <div className="producto-item__titulo">
            {nombre}
          </div>
          <div className="producto-item__precio">${formateador.format(precio)}</div>

          <p className="producto-item__descripcion">{descripcion}</p>

          <button
            className={`producto-item__estado producto-item__estado--${estado}`}
          >
            {estado}
          </button>
        </div>
        <div className="producto-item__acciones">
          <button
            onClick={() => editarProducto(producto)}
            type="button"
            className="boton boton--azul"
          >
            Editar
          </button>
          <button
            onClick={() => eliminar(producto.id)}
            type="button"
            className="boton boton--rojo"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default Producto;
