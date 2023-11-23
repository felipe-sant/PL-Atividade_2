import { Component } from "react";
import Servico from "../modelo/servico";

let servico1 = new Servico()
servico1.nome = "Banho"
servico1.id = 1
servico1.valor = 50.99

let servico2 = new Servico()
servico2.nome = "Tosa"
servico2.id = 2
servico2.valor = 199.99

let servico3 = new Servico()
servico3.nome = "Consulta"
servico3.id = 3
servico3.valor = 99.99

class Main extends Component {
    private lista!: Array<Servico>

    constructor(props: any) {
        super(props)
        this.lista = [servico1, servico2, servico3]
    }

    render() {
        return (
            <div className="main mainServico mainCrud">
                <h1>Serviço</h1>
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
                        {this.lista.map((servico) => {
                            return (
                                <tr>
                                    <td className="id center">{servico.id}</td>
                                    <td>{servico.nome}</td>
                                    <td>{servico.valor}</td>
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