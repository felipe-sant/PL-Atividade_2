import { Component } from "react";
import { petLovers } from "../dados";
import DeletarProduto from "../negocio/produtos/deletarProduto";
import Empresa from "../modelo/empresa";

class Main extends Component {
    private id!: number
    private empresa: Empresa

    constructor(props: any) {
        super(props)
        this.empresa = petLovers
        this.state = {
            id: this.id
        }
    }

    render() {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            let produtoExiste = false

            this.empresa.getProdutos.forEach(produto => { if (produto.id === this.id ) { produtoExiste = true }})

            if (produtoExiste) {
                let deletar = new DeletarProduto(this.id)
                deletar.deletar()
                window.location.href = "/produto"
            } else {
                alert("Produto não encontrado")
            }
        }
        
        const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.id = Number(e.target.value)
            this.setState({id: this.id})
        }

        return (
            <div className="main mainProdutoDelete mainForm">
                <h1>Deletando um produto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input inputId">
                        <label htmlFor="id">Id</label>
                        <input type="number" name="id" id="id" value={this.id} placeholder="0" onChange={handleIdChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <a href="/produto" className="cancel">Cancelar</a>
                        <input type="submit" value="Deletar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Main;