import { Component } from "react";
import { petLovers } from "../dados";
import Servico from "../modelo/servico";
import AtualizarServico from "../negocio/servicos/atualizarServico";

class Item extends Component<{id: number}> {
    private servico!: Servico
    private id: number
    private nome!: string
    private valor!: number
    private servicoExiste: boolean = false

    constructor(props: any) {
        super(props)
        this.id = props.id
        this.servico = petLovers.getServicos.filter(servico => servico.id === this.id)[0]
        if (this.servico !== undefined) {
            this.servicoExiste = true
            this.nome = this.servico.nome
            this.valor = this.servico.valor
        } else {
            this.nome = ""
            this.valor = 0
        }
        this.state = {
            nome: this.nome,
            valor: this.valor
        }
    }

    render() {
        const Atualizar = (nome:string, valor:number) => {
            let atualizacao = new AtualizarServico(petLovers, this.id, nome, valor)
            atualizacao.atualizar()
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            Atualizar(this.nome, this.valor)
            window.location.href = "/servico"
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
            this.setState({nome: this.nome})
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valor = Number(e.target.value)
            this.setState({valor: this.valor})
        }

        if (this.servicoExiste === false) {
            return (
                <div className="item itemServicoEdit itemError">
                    <h2>Serviço com o ID: <strong>{this.id}</strong> não existe</h2>
                </div>
            )
        }

        return (
            <div className="item itemServicoEdit">
                <form onSubmit={handleSubmit}>
                    <div className="input inputNome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" value={this.nome} onChange={handleNomeChange}/>
                    </div>
                    <div className="input inputValor">
                        <label htmlFor="valor">Valor</label>
                        <input type="text" name="valor" id="valor" value={this.valor} onChange={handleValorChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <input type="submit" value="Atualizar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Item