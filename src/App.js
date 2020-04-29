import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Ubicacion from './components/Ubicacion';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';

class App extends Component{

  render(){
    return(
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Route exact path="/ubicacion" component={Ubicacion}></Route>
      <Route exact path="/productos" component={Productos} ></Route>
      <Route exact path="/detalleProducto/:id" component={DetalleProducto}></Route>
    </Switch>
    
          );
  }
  
}
export default App;
