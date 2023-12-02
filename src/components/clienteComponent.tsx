import { Component } from "react";
import Cliente from "../modelo/cliente";
import { petLovers } from "../dados";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Main extends Component {
    private lista!: Array<Cliente>

    constructor(props: any) {
        super(props)
        this.lista = petLovers.getClientes
    }

    render() {
        return (
            <div className="main mainCliente mainCrud">
                <h1>Cliente</h1>
                <div className="navegacao">
                    <a href="/cliente/create" className="criar">Criar</a>
                    <a href="/cliente/edit" className="atualizar">Atualizar</a>
                    <a href="/cliente/delete" className="deletar">Deletar</a>
                </div>
                <div className="menu">
                    <table className="listaClientes">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Produtos Consumidos</th>
                            <th>Servicos Consumidos</th>
                            <th>Pets</th>
                        </tr>
                        {this.lista.map((cliente) => {
                            const showPets = () => {
                                alert("Pets")
                            }

                            const showDados = () => {
                                alert("")
                                console.log(cliente.nome)
                                console.log(cliente.nomeSocial)
                                console.log(cliente.cpf)
                                console.log(cliente.getRgs)
                                console.log(cliente.getTelefones)
                            }

                            return (
                                <tr>
                                    <td className="id center">{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>
                                        <ul>
                                            {cliente.produtosConsumidos.map((produto) => {
                                                return (
                                                    <li>{produto.nome}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            {cliente.servicosConsumidos.map((servico) => {
                                                return (
                                                    <li>{servico.nome}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td className="center">
                                        
                                    </td>
                                    <td className="center">
                                        <Popup trigger={<button className="moreContent">Dados</button>} position={"left center"}>
                                            <h1>{cliente.nome}</h1>
                                            <h2>{cliente.nomeSocial}</h2>
                                            <hr />
                                            <ul>
                                                <li>CPF: {cliente.getCpf.getValor}</li>
                                                <li>RGs: 
                                                    <ol>
                                                        {cliente.getRgs.map((rg) => {
                                                            return (
                                                                <li>{rg.getValor}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                </li>
                                                <li>
                                                    Telefones: 
                                                    <ol>
                                                        {cliente.getTelefones.map((telefone) => {
                                                            return (
                                                                <li>{telefone.getNumeroCompleto}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                </li>
                                            </ul>
                                        </Popup>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default Main;