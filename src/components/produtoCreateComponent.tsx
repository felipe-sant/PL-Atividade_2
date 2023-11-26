import { Component } from "react";
import { petLovers } from "../dados";
import CadastroProduto from "../negocio/produtos/cadastroProdutos";

class Main extends Component {
    private nome!: string
    private valor!: number

    constructor(props: any) {
        super(props)
        this.state = {
            nome: this.nome,
            valor: this.valor
        }
    }

    render() {
        const cadastrar = (nome:string, valor:number) => {
            let cadastro = new CadastroProduto(petLovers, nome, valor)
            cadastro.cadastrar()
            window.location.href = "/produto"
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
            e.preventDefault()
            if (this.nome !== undefined && this.valor !== undefined) {
                cadastrar(this.nome, this.valor)
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