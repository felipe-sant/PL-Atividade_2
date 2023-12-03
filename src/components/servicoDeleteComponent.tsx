import { Component } from "react";
import { petLovers } from "../dados";
import DeletarServico from "../negocio/servicos/deletarServico";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";

class Main extends Component {
    private id!: number
    private empresa:Empresa

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
            
            let servicoExiste = false

            this.empresa.getServicos.forEach(servico => { if (servico.id === this.id) { servicoExiste = true }})

            if (servicoExiste) {
                let deletar = new DeletarServico(this.id)
                deletar.deletar()
                window.location.href = "/servico"
            } else {
                alert("Serviço não encontrado")
            }
        }

        const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.id = Number(e.target.value)
            this.setState({id: this.id})
        }

        return (
            <div className="main mainServicoDelete mainForm">
                <h1>Deletando um Serviço</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input inputId">
                        <label htmlFor="id">Id</label>
                        <input type="number" name="id" id="id" value={this.id} placeholder="0" onChange={handleIdChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <a href="/servico" className="cancel">Cancelar</a>
                        <input type="submit" value="Deletar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Main;