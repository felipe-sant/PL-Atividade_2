import { Component } from "react";
import Empresa from "../modelo/empresa";
import { petLovers } from "../dados";
import DeletarCliente from "../negocio/clientes/deletarCliente";

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

            let clienteExiste = false

            this.empresa.getClientes.forEach(cliente => { if (cliente.id === this.id) { clienteExiste = true } });

            if (clienteExiste) {
                let deletar = new DeletarCliente(this.id)
                deletar.deletar()
                window.location.href = "/cliente"
            } else {
                alert("Cliente não encontrado")
            }
        }

        const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.id = Number(e.target.value)
            this.setState({id: this.id})
        }

        return (
            <div className="main mainClienteDelete mainForm">
                <h1>Deletando um Cliente</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input inputId">
                        <label htmlFor="id">Id</label>
                        <input type="number" name="id" id="id" value={this.id} placeholder="0" onChange={handleIdChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <a href="/cliente" className="cancel">Cancelar</a>
                        <input type="submit" value="Deletar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Main;