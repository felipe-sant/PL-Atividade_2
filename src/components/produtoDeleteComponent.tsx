import { Component } from "react";
import { petLovers } from "../dados";
import DeletarProduto from "../negocio/produtos/deletarProduto";

class Main extends Component {
    private id!: number

    constructor(props: any) {
        super(props)
        this.state = {
            id: this.id
        }
    }

    render() {
        const deletar = (id:number) => {
            let deletando = new DeletarProduto(petLovers, id)
            deletando.deletar()
        }

        const produtoExiste = (id:number) => {
            let deletando = new DeletarProduto(petLovers, id)
            return deletando.produtoExiste()
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (this.id !== undefined) {
                if (produtoExiste(this.id)) {
                    deletar(this.id)
                    window.location.href = "/produto"
                } else {
                    alert("Produto não existe")
                }
            } else {
                alert("Preencha todos os campos!")
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