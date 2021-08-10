import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Carro from './componentes/carro/Carro';
import Cadastrar from './componentes/carro/Cadastrar';



function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/carros" render={() => <Carro />} />
        <Route exact path="/cadastrarcarro" render={() => <Cadastrar />} />
      </Switch>
    </Router>
  );
}

export default App;
