import React from "react";

import Layout from "./componentes/layout/Layout";
import ListadoProductos from "./componentes/contenido/ListadoProductos";
import AgregarProducto from "./componentes/contenido/AgregarProducto";
import EditarProducto from "./componentes/contenido/EditarProducto";

import store from "./store";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={ListadoProductos} />
          <Route exact path="/nuevo-producto" component={AgregarProducto} />
          <Route exact path="/editar-producto" component={EditarProducto} />

          
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
