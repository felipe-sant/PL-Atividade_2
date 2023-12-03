import { Component } from "react";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Pet from "../modelo/pet";
import InputRG from "./clienteCreateRgComponent";
import InputTelefone from "./clienteCreateTelefoneComponent";
import CadastroCliente from "../negocio/clientes/cadastroCliente";
import { petLovers } from "../dados";

type Props = {
    nome: string,
    nomeSocial: string,
    valorCPF: string,
    dataCPF: string,
}

let ultimoId = 0
if (petLovers.getClientes.length > 0) {
    ultimoId = petLovers.getClientes[petLovers.getClientes.length - 1].id
}

class Main extends Component<{}, Props> {
    private id!: number
    private nome!: string
    private nomeSocial: string = ""
    private cpf!: CPF
    private valorCPF!: string
    private dataCPF!: string
    private rgs: Array<RG> = []
    private telefones: Array<Telefone> = []

    constructor(props: {}) {
        super(props)
        this.id = ultimoId + 1
        this.state = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            valorCPF: this.valorCPF,
            dataCPF: this.dataCPF,
        }
    }

    render() {
        const addUmDia = (data: Date) => {
            let nova_data = new Date(data)
            nova_data.setDate(nova_data.getDate() + 1)
            return nova_data
        }

        const handleSubmit = () => {
            this.cpf = new CPF(this.valorCPF, addUmDia(new Date(this.dataCPF)))
            this.rgs = JSON.parse(localStorage.getItem("clienteRGs") || "[]")
            this.telefones = JSON.parse(localStorage.getItem("clienteTelefones") || "[]")

            let nomeValid = false
            let cpfValid = false
            let rgsValid = false
            let telefonesValid = false

            if (this.nome === "" || this.nome === undefined || this.nome === null) { nomeValid = false } else { nomeValid = true }
            if (
                this.valorCPF === "" || this.valorCPF === undefined || this.valorCPF === null ||
                this.dataCPF === "" || this.dataCPF === undefined || this.dataCPF === null
            ) { cpfValid = false } else { cpfValid = true }

            if (this.rgs.length === 0) { rgsValid = false } else { rgsValid = true }
            if (this.telefones.length === 0) { telefonesValid = false } else { telefonesValid = true }

            if (nomeValid && cpfValid && rgsValid && telefonesValid) {
                let cliente = [this.nome, this.nomeSocial, this.cpf, this.rgs, this.telefones, this.id]
                let clientes = JSON.parse(localStorage.getItem("clientes") || "[]")
                clientes.push(cliente)
                localStorage.setItem("clientes", JSON.stringify(clientes))
                limparLocalStorage()
                window.location.href = "/cliente"
            } else {
                if (!nomeValid) {
                    alert("Nome inválido")
                } else if (!cpfValid) {
                    alert("CPF inválido")
                } else if (!rgsValid) {
                    console.log("RG inválido")
                } else if (!telefonesValid) {
                    console.log("Telefone inválido")
                }
            }
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
            this.setState({nome: this.nome})
        }

        const handleNomeSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nomeSocial = e.target.value
            this.setState({nomeSocial: this.nomeSocial})
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valorCPF = e.target.value
            if (this.valorCPF.length === 11) {
                this.valorCPF = this.valorCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            }
            this.setState({valorCPF: this.valorCPF})
        }

        const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.dataCPF = e.target.value
            this.setState({dataCPF: this.dataCPF})
        }

        const limparLocalStorage = () => {
            localStorage.removeItem("clienteRGs")
            localStorage.removeItem("clienteTelefones")
        }

        return (
            <div className="main mainClienteCreate mainForm">
                <h1>Criando um novo cliente</h1>
                <form>
                    <div className="input inputName">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" onChange={handleNomeChange} name="nome" id="nome" value={this.nome} placeholder="Nome do cliente"/>
                    </div>
                    <div className="input inputNomeSocial">
                        <label htmlFor="nomeSocial">Nome Social</label>
                        <input type="text" onChange={handleNomeSocialChange} name="nomeSocial" id="nomeSocial" value={this.nomeSocial} placeholder="Nome social do cliente"/>
                    </div>
                    <div className="input inputCPF">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" onChange={handleValorChange} name="valorCPF" id="valorCPF" value={this.valorCPF} placeholder="000.000.000-00" maxLength={14} minLength={14}/>
                        <input type="date" onChange={handleDataChange} name="dataCPF" id="dataCPF" value={this.dataCPF} placeholder="Data de emissão do CPF"/>
                    </div>
                </form>
                <InputRG />
                <InputTelefone />
                <div className="sendForm">
                    <a href="/cliente" className="cancel">Cancelar</a>
                    <input type="button" onClick={handleSubmit} value="Criar"/>
                </div>
            </div>
        )
    }
}

export default Main;