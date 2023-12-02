import { Component } from "react";
import Cliente from "../modelo/cliente";
import { petLovers } from "../dados";

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
                                console.log(cliente.cpf.getValor)
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
                                    <td className="center"><a onClick={showPets}>...</a></td>
                                    <td className="center"><a onClick={showDados}>Dados</a></td>
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