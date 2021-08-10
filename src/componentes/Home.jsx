import React from 'react';

import { Component } from "react";

import Tabela from './carro/Tabela';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SimpleStorage from "react-simple-storage"


const Home = () => (
    <div>
        <h1>...</h1>
        {
            function setStock(props) {


                this.state = {
                    listaObjetos: this.state.listaObjetos
                }

                return (

                    <Router>
                        <SimpleStorage parent={this} />
                        <Switch>
                            <Route exact path="/carros"
                                render={
                                    () => <Tabela listaObjetos={this.state.listaObjetos}
                                    />
                                } />

                        </Switch>
                    </Router>
                );

            }}
    </div>
);


export default Home;
