import { Component } from "react";
import { petLovers } from "../dados";
import Produto from "../modelo/produto";

class Main extends Component {
    private lista: Array<Produto>

    constructor(props: any) {
        super(props)
        this.lista = petLovers.getProdutos
    }

    render() {
        return (
            <div className="main mainProduto mainCrud">
                <h1>Produto</h1>
                <div className="navegacao">
                    <a href="produto/create" className="criar">Criar</a>
                    <a href="#" className="atualizar">Atualizar</a>
                    <a href="#" className="deletar">Deletar</a>
                </div>
                <div className="menu">
                    <table className="listaProdutos">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                        {this.lista.map((produto) => {
                            return (
                                <tr>
                                    <td className="id center">{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.valor}</td>
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