import {
  PRODUCTO_GUARDADO_EXITO,
  PRODUCTO_EDITADO_EXITO,
  SELECCIONAR_PRODUCTO_EXITO,
  PRODUCTO_ELIMINADO_EXITO,
  BUSCAR_PRODUCTOS_EXITO
} from "../types";

const stateInicial = {
  productos:
    localStorage.getItem("productos") === null
      ? []
      : JSON.parse(localStorage.getItem("productos")),
  productoSeleccionado: JSON.parse(localStorage.getItem("productoSeleccionado")),
  productosFiltrados:localStorage.getItem("productos") === null
  ? []
  : JSON.parse(localStorage.getItem("productos")),
};

export default (state = stateInicial, action) => {
  switch (action.type) {
    case PRODUCTO_GUARDADO_EXITO:
      let productos = [...state.productos, action.payload];
      localStorage.setItem("productos", JSON.stringify(productos));

      return {
        ...state,
        productos: [...state.productos, action.payload],
      };

    case PRODUCTO_EDITADO_EXITO:
      let productosEditado = state.productos.map((producto) =>
        producto.id === action.payload.id
          ? (producto = action.payload)
          : producto
      );
      localStorage.setItem("productos", JSON.stringify(productosEditado));
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    case SELECCIONAR_PRODUCTO_EXITO:
      localStorage.setItem("productoSeleccionado",JSON.stringify(action.payload))
      return {
        ...state,
        productoSeleccionado: action.payload,
      };
    case PRODUCTO_ELIMINADO_EXITO:
      let productosSeleccionados = state.productos.filter(
        (producto) => producto.id !== action.payload
      );
      localStorage.setItem("productos", JSON.stringify(productosSeleccionados));
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== action.payload
        ),
      };
      case BUSCAR_PRODUCTOS_EXITO:
        return {
          ...state,
          productosFiltrados: state.productos.filter(
            (producto) => producto.nombre.toLowerCase().includes(action.payload.toLowerCase()) || producto.tipo.toLowerCase().includes(action.payload.toLowerCase()) || action.payload === ''
          ),
        };
    default:
      return state;
  }
};
