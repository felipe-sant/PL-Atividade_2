import { Component } from "react";
import Servico from "../modelo/servico";
import { petLovers } from "../dados";


class Main extends Component {
    private lista!: Array<Servico>

    constructor(props: any) {
        super(props)
        this.lista = petLovers.getServicos
    }

    render() {
        return (
            <div className="main mainServico mainCrud">
                <h1>Serviço</h1>
                <div className="navegacao">
                    <a href="/servico/create" className="criar">Criar</a>
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