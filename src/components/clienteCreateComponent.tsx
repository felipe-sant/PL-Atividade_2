import { Component } from "react";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Pet from "../modelo/pet";
import { petLovers } from "../dados";

class Main extends Component {
    private nome!: string
    private nomeSocial!: string
    private cpf!: CPF
    private valorCPF!: string
    private dataCPF!: string
    private rgs!: Array<RG>
    private telefones!: Array<Telefone>
    private pets!: Array<Pet>

    constructor(props: any) {
        super(props)
        this.state = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            valor: this.valorCPF,
            data: this.dataCPF,
            rgs: this.rgs,
            telefones: this.telefones,
            pets: this.pets
        }
    }

    render() {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            this.cpf = new CPF(this.valorCPF, new Date(this.dataCPF))

            console.log("Nome: " + this.nome)
            console.log("Nome_Social: " + this.nomeSocial)
            console.log(this.cpf)
            console.log("RGs: " + this.rgs)
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
                <form onSubmit={handleSubmit}>
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
                        <input type="text" onChange={handleValorChange} name="valor" id="valor" value={this.valorCPF} placeholder="000.000.000-00" maxLength={14} minLength={14}/>
                        <input type="date" onChange={handleDataChange} name="data" id="data" value={this.dataCPF} placeholder="Data de emissão do CPF"/>
                    </div>
                    <div className="input inputRGs">
                        {/* RG FODA */}
                    </div>
                    <div className="input inputTelefones">
                        {/* Telefone FODA */}
                    </div>
                    <div className="input inputPets">
                        {/* Pet FODA */}
                    </div>
                    <div className="input inputSubmit">
                        <a href="/cliente" className="cancel">Cancelar</a>
                        <input type="submit" value="Criar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Main;