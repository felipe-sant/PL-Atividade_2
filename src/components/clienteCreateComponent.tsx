import { Component } from "react";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Pet from "../modelo/pet";
import InputRG from "./clienteCreateRgComponent";

type Props = {
    nome: string,
    nomeSocial: string,
    valorCPF: string,
    dataCPF: string,
    telefones: Array<Telefone>,
    pets: Array<Pet>
}

class Main extends Component<{}, Props> {
    private nome!: string
    private nomeSocial!: string
    private cpf!: CPF
    private valorCPF!: string
    private dataCPF!: string
    private rgs: Array<RG> = [] // fazer algo para mostrar os rgs ja cadastrados com o useState
    private telefones!: Array<Telefone>
    private pets!: Array<Pet>

    constructor(props: {}) {
        super(props)
        this.state = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            valorCPF: this.valorCPF,
            dataCPF: this.dataCPF,
            telefones: this.telefones,
            pets: this.pets,
        }
    }

    render() {
        const handleSubmit = () => {
            this.cpf = new CPF(this.valorCPF, new Date(this.dataCPF))
            this.rgs = JSON.parse(localStorage.getItem("clienteRGs") || "[]")
            console.log(this.rgs)

            console.log("Nome: " + this.nome)
            console.log("Nome_Social: " + this.nomeSocial)
            console.log(this.cpf)
            console.log(this.rgs)
            console.log("Telefones: " + this.telefones)
            console.log("Pets: " + this.pets)
            console.log("")
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
        }

        const handleNomeSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nomeSocial = e.target.value
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valorCPF = e.target.value
            if (e.target.value.length === 11) {
                e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            }
        }

        const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.dataCPF = e.target.value
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
                    <div className="input inputTelefones">
                        {/* Telefone FODA */}
                    </div>
                    <div className="input inputPets">
                        {/* Pet FODA */}
                    </div>
                </form>
                <InputRG />
                <div className="sendForm">
                    <a href="/cliente" className="cancel">Cancelar</a>
                    <input type="button" onClick={handleSubmit} value="Criar"/>
                </div>
            </div>
        )
    }
}

export default Main;