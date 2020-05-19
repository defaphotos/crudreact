import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import {useDispatch,useSelector} from 'react-redux';
import Swal from 'sweetalert2'
import Error from '../ui/Error';

import {editarProductoAction} from '../../actions/productoAction';

const EditarProducto = (props) => {
  

  const {productoSeleccionado} = useSelector(state => state.producto);
  const dispatch = useDispatch();

  const [producto, guardarProducto] = useState(productoSeleccionado);

  const [error, guardarError] = useState('');


  const { nombre, descripcion, precio, tipo, estado } = producto;

  const cambiarValor = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const guardarNuevoProducto = (e) => {
    e.preventDefault();

    if(nombre.trim() === ''|| descripcion.trim()=== '' || precio.trim()===''){
      guardarError('Todos los campos son obligatorios');
      setTimeout(()=>{
        guardarError('');

      },5000)
        return;
    }
    guardarError('');

     let nuevoProducto =producto;


     dispatch(editarProductoAction(nuevoProducto));

     Swal.fire(
      'Producto Editado!',
      'El Producto se ha actualizado correctamente!',
      'success'
    )

     props.history.push("/");
  };

  return (
    <>
      <form className="formulario" onSubmit={guardarNuevoProducto} noValidate>
        <h1 className="formulario__titulo">Editar Producto</h1>
        <div className="formulario__campo">
          <label htmlFor="nombre" className="formulario__label">
            Nombre
          </label>
          <input
            className="formulario__input"
            type="text"
            id="nombre"
            placeholder="Nombre Producto"
            name="nombre"
            value={nombre}
            onChange={cambiarValor}
          />
        </div>

        <div className="formulario__campo">
          <label htmlFor="descripcion" className="formulario__label">
            Descripcion
          </label>
          <textarea
            className="formulario__textarea"
            id="descripcion"
            placeholder="Descripcion"
            name="descripcion"
            value={descripcion}
            onChange={cambiarValor}
          />
        </div>

        <div className="formulario__campo">
          <label htmlFor="precio" className="formulario__label">
            Precio
          </label>
          <input
            className="formulario__input"
            type="number"
            id="precio"
            placeholder="Precio Producto"
            name="precio"
            value={precio}
            onChange={cambiarValor}
          />
        </div>
        <div className="formulario__campo">
          <label htmlFor="precio" className="formulario__label">
            Tipo Producto
          </label>
          <select value={tipo} name="tipo" id="tipo" onChange={cambiarValor} className="formulario__select">
            <option value="comida">Comida</option>
            <option value="limpieza">Limpieza</option>
            <option value="ropa">Ropa</option>
          </select>
        </div>
        <div className="formulario__campo">
          <label htmlFor="precio" className="formulario__label">
            Estado Producto
          </label>
          <select value={estado} name="estado" id="estado" onChange={cambiarValor} className="formulario__select">
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <input type="submit"  value="Editar Producto" className="boton boton--bloque boton--azul" />
        { error !=='' && <Error mensaje={error} />}

      </form>
    </>
  );
};

export default EditarProducto;
