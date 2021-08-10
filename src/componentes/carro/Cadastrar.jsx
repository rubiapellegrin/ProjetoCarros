import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Cadastrar extends Component {

    state = {
        objeto: {
            id: this.props.objeto.id,
            placa: this.props.objeto.placa,
            modelo: this.props.objeto.modelo,
            ano: this.props.objeto.ano
        },
        redirecionar: false
    }

    acaoCadastrar = e => {
        e.preventDefault();
        if (this.props.editar) {
            this.props.editar(this.state.objeto);
        } else {
            this.props.inserir(this.state.objeto);
        }
        this.setState({ redirecionar: true });
    }

    render() {
        if (this.state.redirecionar === true) {
            return <Redirect to="/carros" />
        }

        return (
            <div style={{ padding: '20px' }}>
                <h2>Edição de Carro</h2>
                <form id="formulario" onSubmit={this.acaoCadastrar}>
                    <div className="form-group">
                        <label for="txtId">ID</label>
                        <input type="number" className="form-control" id="txtId"
                            defaultValue={this.props.objeto.id}
                            value={this.state.objeto.id}
                            readOnly />
                    </div>
                    <div className="form-group">
                        <label for="txtPlaca">Placa</label>
                        <input type="text" className="form-control" id="txtPlaca"
                            placeholder="Informe a placa"
                            defaultValue={this.props.objeto.placa}
                            value={this.state.objeto.placa}
                            required
                            onChange={
                                e => this.setState(
                                    { objeto: { ...this.state.objeto, placa: e.target.value } }
                                )
                            } />
                    </div>
                    <div className="form-group">
                        <label for="txtModelo">Modelo</label>
                        <input type="text" className="form-control" id="txtModelo"
                            placeholder="Informe o modelo"
                            defaultValue={this.props.objeto.modelo}
                            value={this.state.objeto.modelo}
                            required
                            onChange={
                                e => this.setState(
                                    { objeto: { ...this.state.objeto, modelo: e.target.value } }
                                )
                            } />
                    </div>
                    <div className="form-group">
                        <label for="txtAno">Ano</label>
                        <input type="number" className="form-control" id="txtAno"
                            placeholder="Informe o ano"
                            required
                            defaultValue={this.props.objeto.ano}
                            value={this.state.objeto.ano}
                            onChange={
                                e => this.setState(
                                    { objeto: { ...this.state.objeto, ano: e.target.value } }
                                )
                            } />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Salvar <i className="bi bi-save"></i>
                    </button>
                </form>
            </div>
        );
    }

}

export default Cadastrar;
