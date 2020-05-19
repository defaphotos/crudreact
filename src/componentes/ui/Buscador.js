import React, { useState, useEffect } from 'react';
import {buscarProductosAction} from '../../actions/productoAction';
import {useDispatch} from 'react-redux';

const Buscador = () => {

    const dispatch = useDispatch();
    const [textoProducto,guardarTextoProducto] = useState('');

    const buscarProducto =(e)=>{
        e.preventDefault();
        dispatch(buscarProductosAction(textoProducto));
    }



    useEffect(()=>{
        if(textoProducto === ''){
            dispatch(buscarProductosAction(textoProducto));
        }
    },[textoProducto])

    return (
        <form className="buscador" onSubmit={buscarProducto}>
            <input type="text" value={textoProducto} onChange={(e)=>guardarTextoProducto(e.target.value)} className="buscador__texto" placeholder="Busca un Producto" />
            <input type="submit" className="buscador__icono" />
        </form>
    );
};

export default Buscador;