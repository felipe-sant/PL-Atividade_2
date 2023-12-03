import { Component } from "react";
import { petLovers } from "../dados";
import CadastroProduto from "../negocio/produtos/cadastroProdutos";

let ultimoId = 0
if (petLovers.getProdutos.length > 0) {
    ultimoId = petLovers.getProdutos[petLovers.getProdutos.length - 1].id
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
                let produto = [this.nome, this.valor, this.id]
                let produtos = JSON.parse(localStorage.getItem("produtos") || "[]")
                produtos.push(produto)
                localStorage.setItem("produtos", JSON.stringify(produtos))
                window.location.href = "/produto"
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
            <div className="main mainProdutoCreate mainForm">
                <h1>Criando um novo produto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input inputName">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" value={this.nome} placeholder="Nome do produto" onChange={handleNomeChange}/>
                    </div>
                    <div className="input inputValue">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" name="valor" id="valor" value={this.valor} placeholder="0" onChange={handleValorChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <a href="/produto" className="cancel">Cancelar</a>
                        <input type="submit" value="Criar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Main;