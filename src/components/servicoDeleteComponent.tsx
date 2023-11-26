import { Component } from "react";
import { petLovers } from "../dados";
import DeletarServico from "../negocio/servicos/deletarServico";

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
            let deletando = new DeletarServico(petLovers, id)
            deletando.deletar()
        }

        const servicoExiste = (id:number) => {
            let deletando = new DeletarServico(petLovers, id)
            return deletando.servicoExiste()
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (this.id !== undefined) {
                if (servicoExiste(this.id)) {
                    deletar(this.id)
                    window.location.href = "/servico"
                } else {
                    alert("Serviço não existe")
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