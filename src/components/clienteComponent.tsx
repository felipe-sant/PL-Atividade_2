import { Component } from "react";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";

let nome1 = "Gabriel"
let nomeSocial1 = ""
let cpf1 = new CPF("12345678910", new Date(1999, 1, 1))
let id1 = 1
let rgs1 = [ new RG("123456789", new Date(1999, 1, 1)), ]
let telefones1 = [ new Telefone("12", "13213213") ]
let cliente1 = new Cliente(nome1, nomeSocial1, cpf1, id1, rgs1, telefones1)

let nome2 = "Bruno"
let nomeSocial2 = ""
let cpf2 = new CPF("22345678920", new Date(2999, 2, 2))
let id2 = 2
let rgs2 = [ new RG("223456789", new Date(2999, 2, 2)), ]
let telefones2 = [ new Telefone("22", "23223223") ]
let cliente2 = new Cliente(nome2, nomeSocial2, cpf2, id2, rgs2, telefones2)

class Main extends Component {
    private lista!: Array<Cliente>

    constructor(props: any) {
        super(props)
        this.lista = [cliente1, cliente2]
    }

    render() {
        return (
            <div className="main mainCliente mainCrud">
                <h1>Cliente</h1>
                <div className="navegacao">
                    <a href="#" className="criar">Criar</a>
                    <a href="#" className="atualizar">Atualizar</a>
                    <a href="#" className="deletar">Deletar</a>
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
                            return (
                                <tr>
                                    <td className="id center">{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>
                                        <ul>
                                            {cliente.getProdutosConsumidos.map((produto) => {
                                                return (
                                                    <li>{produto.nome}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            {cliente.getServicosConsumidos.map((servico) => {
                                                return (
                                                    <li>{servico.nome}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td className="center"><a href="#">...</a></td>
                                    <td className="center"><a href="">Dados</a></td>
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