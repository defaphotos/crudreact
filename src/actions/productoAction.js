import {PRODUCTO_GUARDADO_EXITO,PRODUCTO_EDITADO_EXITO,SELECCIONAR_PRODUCTO_EXITO,PRODUCTO_ELIMINADO_EXITO,BUSCAR_PRODUCTOS_EXITO} from '../types';

export const guardarProductoAction =(producto)=>{
    return (dispatch)=>{
        dispatch(productoGuardadoExito(producto));
    }
}

const productoGuardadoExito =(producto)=>({
    type: PRODUCTO_GUARDADO_EXITO,
    payload: producto
})


export const editarProductoAction =(producto)=>{
    return (dispatch)=>{
        dispatch(productoEditadoExito(producto));
    }
}

const productoEditadoExito =(producto)=>({
    type:PRODUCTO_EDITADO_EXITO,
    payload:producto
})

export const seleccionarProductoAction =(producto)=>{
    return (dispatch)=>{
        dispatch(seleccionarProductoExito(producto));
    }
}

const seleccionarProductoExito =(producto)=>({
    type:SELECCIONAR_PRODUCTO_EXITO,
    payload:producto
})


export const eliminarProductoAction =(id)=>{
    return (dispatch)=>{
        dispatch(productoEliminadoExito(id));
    }
}

const productoEliminadoExito =(id)=>({
    type:PRODUCTO_ELIMINADO_EXITO,
    payload:id
})


export const buscarProductosAction =(textoProducto)=>{
    return (dispatch)=>{
        dispatch(buscarProductosExito(textoProducto));
    }
}

const buscarProductosExito =(textoProducto)=>({
    type:BUSCAR_PRODUCTOS_EXITO,
    payload:textoProducto
})