import { Component } from "react";
import Produto from "../modelo/produto";

let produto1 = new Produto()
produto1.nome = "Ração"
produto1.id = 1
produto1.valor = 150.99

let produto2 = new Produto()
produto2.nome = "Brinquedo"
produto2.id = 2
produto2.valor = 29.99

let produto3 = new Produto()
produto3.nome = "Remédio"
produto3.id = 3
produto3.valor = 89.99

class Main extends Component {
    private lista!: Array<Produto>

    constructor(props: any) {
        super(props)
        this.lista = [produto1, produto2, produto3]
    }

    render() {
        return (
            <div className="main mainProduto mainCrud">
                <h1>Produto</h1>
                <div className="navegacao">
                    <a href="#" className="criar">Criar</a>
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