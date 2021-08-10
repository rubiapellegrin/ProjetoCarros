import { Component } from "react";

import Tabela from './Tabela';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cadastrar from './Cadastrar'
import SimpleStorage from "react-simple-storage"


class Carro extends Component {
    constructor(props) {

        super(props);
        this.state = {
            listaObjetos: []
            , sequenciacodigo: 0
        }
    }
    remover = objeto => {
        if (window.confirm("Remover este carro?")) {
            const listaObjetos = this.state.listaObjetos.filter(p => p.id !== objeto.id);
            this.setState({ listaObjetos });
        }
    }

    inserir = objeto => {
        var novoID = this.state.sequenciacodigo + 1;
        objeto.id = novoID;
        this.setState({ sequenciacodigo: novoID });
        this.setState({
            listaObjetos: [...this.state.listaObjetos, objeto]
        })

    }

    editar = objeto => {
        // encontrar o indice do objeto a ser editado
        const index = this.state.listaObjetos.findIndex(p => p.id === objeto.id);
        // remover o objeto da lista para receber o objeto editado
        const listaObjetos = this.state.listaObjetos.splice(0, index)
            .concat(this.state.listaObjetos.splice(index + 1));
        // adicionamos o elemento na lista nova
        const newListaObjetos = [...listaObjetos, objeto].sort((a, b) => a.id - b.id);
        this.setState({
            listaObjetos: newListaObjetos
        });

    }


    render() {

        return (

            <Router>
                <SimpleStorage parent={this} />
                <Switch>
                    <Route exact path="/carros"
                        render={
                            () => <Tabela listaObjetos={this.state.listaObjetos}
                                remover={this.remover} />
                        } />
                    <Route exact path="/cadastrarcarro" render={() =>
                        <Cadastrar inserir={this.inserir}
                            objeto={{ id: 0, placa: "", modelo: "", ano: "" }} />
                    } />
                    <Route exact path="/editarcarro/:id" render={props => {
                        console.log("Id recibida: " + props.match.params.id);
                        const objeto = this.state.listaObjetos.find(
                            objeto => objeto.id === Number(props.match.params.id)
                        );
                        if (objeto) {
                            return (
                                <Cadastrar editar={this.editar} objeto={objeto} />
                            )
                        } else {
                            return <Redirect to="/carros" />
                        }
                    }
                    } />
                </Switch>
            </Router>
        );
    }

}

export default Carro;