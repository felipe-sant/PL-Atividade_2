import { Component } from "react";
import CadastroServico from "../negocio/servicos/cadastroServico";
import { petLovers } from "../dados";

let ultimoId = 0
if (petLovers.getServicos.length > 0) {
    ultimoId = petLovers.getServicos[petLovers.getServicos.length - 1].id
}

class Main extends Component {
    private id!: number
    private nome!: string
    private valor!: number

    constructor(props: any) {
        super(props)
        this.id = ultimoId + 1
        this.state = {
            nome: this.nome,
            valor: this.valor
        }
    }

    render() {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
            e.preventDefault()
            if (this.nome !== undefined && this.valor !== undefined) {
                let servico = [this.nome, this.valor, this.id]
                let servicos = JSON.parse(localStorage.getItem("servicos") || "[]")
                servicos.push(servico)
                localStorage.setItem("servicos", JSON.stringify(servicos))
                window.location.href = "/servico"
            } else {
                alert("Preencha todos os campos!")
            }
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
            this.setState({nome: this.nome})
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valor = Number(e.target.value)
            this.setState({valor: this.valor})
        }

        return (
            <div className="main mainServicoCreate mainForm">
                <h1>Criando um novo serviço</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input inputName">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" value={this.nome} placeholder="Nome do serviço" onChange={handleNomeChange}/>
                    </div>
                    <div className="input inputValue">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" name="valor" id="valor" value={this.valor} placeholder="0" onChange={handleValorChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <a href="/servico" className="cancel">Cancelar</a>
                        <input type="submit" value="Criar"/>
                    </div>
                </form>
            </div>
        )    
    }
}

export default Main;