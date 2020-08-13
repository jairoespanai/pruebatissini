import React, { Component } from 'react';
import ReactDOM from "react-dom";
import NavBar from './NavBar';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import CatalogosTissini from "./CatalogosTissini";
import CategoriasTissini from "./CategoriasTissini";


class Layout extends Component {
  render() {
    return (

      <BrowserRouter>
      <NavBar />
       <Redirect
           from="" 
           to="/home" />
        <Switch>
          <Route 
          path='/home' exact 
          render={() => <CategoriasTissini />} />
          <Route 
          path='/catalogos/:idC' 
          component={CatalogosTissini} />
          <Route 
          path='/categorias' exact 
          render={() => <CategoriasTissini />} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layout;