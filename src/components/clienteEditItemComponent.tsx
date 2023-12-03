import { Component, ReactNode } from "react"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import { petLovers } from "../dados"
import InputRG from "./clienteCreateRgComponent"
import InputTelefone from "./clienteCreateTelefoneComponent"

const dataToString = (data: Date) => {
    let dia = (data.getDate()).toString()
    let mes = (data.getMonth() + 1).toString()
    let ano = data.getFullYear().toString()
    if (dia.length === 1) {
        dia = "0" + dia
    }
    if (mes.length === 1) {
        mes = "0" + mes
    }
    if (ano == "1111") {
        return "00" + "/" + "00" + "/" + "0000"
    }
    return ano + "-" + mes + "-" + dia
}

type Props = {
    nome: string,
    nomeSocial: string,
    valorCPF: string,
    dataCPF: string,
}

class ClienteJson {
    public nome!:string
    public nomeSocial!:string
    public cpf!: CPF
    public rgs!: Array<RG>
    public telefones!: Array<Telefone>
    public id!: number

    constructor(nome:string, nomeSocial:string, cpf:CPF, rgs:Array<RG>, telefones:Array<Telefone>, id:number) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.telefones = telefones
        this.id = id
    }
}

class Item extends Component<{id:number}, Props> {
    private cliente!: Cliente
    private id: number
    private nome!: string
    private nomeSocial!: string
    private valorCPF!: string
    private dataCPF!: string
    private cpf!: CPF
    private rgs: Array<RG> = []
    private telefones: Array<Telefone> = []
    private produtoExiste: boolean = false

    constructor(props: any) {
        super(props)
        this.id = props.id
        this.cliente = petLovers.getClientes.filter(cliente => cliente.id === this.id)[0]
        if (this.cliente !== undefined) {
            this.produtoExiste = true
            this.nome = this.cliente.nome
            this.nomeSocial = this.cliente.nomeSocial
            this.valorCPF = this.cliente.cpf.getValor
            this.dataCPF = dataToString(new Date(this.cliente.cpf.getDataEmissao))
            this.cpf = this.cliente.cpf
            this.rgs = this.cliente.rgs
            localStorage.setItem("clienteRGs", JSON.stringify(this.rgs))
            this.telefones = this.cliente.telefones
            localStorage.setItem("clienteTelefones", JSON.stringify(this.telefones))
        } else {
            this.nome = ""
            this.nomeSocial = ""
            this.valorCPF = ""
            this.dataCPF = ""
        }
        this.state = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            valorCPF: this.valorCPF,
            dataCPF: this.dataCPF,
        }
    }
    render() {
        if (this.produtoExiste === false) {
            return (
                <div className="item itemClienteEdit itemError">
                    <h2>Cliente com o ID: <strong>{this.id}</strong> não existe</h2>
                </div>
            )
        }

        const limparLocalStorage = () => {
            localStorage.removeItem("clienteRGs")
            localStorage.removeItem("clienteTelefones")
        }

        const addUmDia = (data: Date) => {
            let nova_data = new Date(data)
            nova_data.setDate(nova_data.getDate() + 1)
            return nova_data
        }

        const handleSubmit = () => {
            this.cpf = new CPF(this.valorCPF, addUmDia(new Date(this.dataCPF)))
            this.rgs = JSON.parse(localStorage.getItem("clienteRGs") || "[]")
            this.telefones = JSON.parse(localStorage.getItem("clienteTelefones") || "[]")

            let listaClientes = new Array<ClienteJson>
            let json = localStorage.getItem('clientes')
            json = json ? JSON.parse(json) : []

            if (json != null) {
                for (let i = 0; i < json.length; i++) {
                    if (json[i]) {
                        let cliente = json[i]
                        let nome = cliente[0]
                        let nomeSocial = cliente[1]
                        // @ts-ignore
                        let cpf = new CPF(cliente[2].valor, cliente[2].dataEmissao)
                        let rgs: Array<RG> = []
                        for (let i = 0; i < cliente[3].length; i++) {
                            let rg = cliente[3][i]
                            // @ts-ignore
                            let valor = rg.valor
                            // @ts-ignore
                            let dataEmissao = rg.dataEmissao
                            rgs.push(new RG(valor, dataEmissao))
                        }
                        let telefones: Array<Telefone> = []
                        for (let i = 0; i < cliente[4].length; i++) {
                            let telefone = cliente[4][i]
                            // @ts-ignore
                            let ddd = telefone.ddd
                            // @ts-ignore
                            let numero = telefone.numero
                            telefones.push(new Telefone(ddd, numero))
                        }
                        let id = cliente[5]

                        // @ts-ignore
                        listaClientes.push(new ClienteJson(nome,nomeSocial,cpf,rgs,telefones,id))
                    }
                }
            }

            listaClientes.forEach(cliente => {
                if (cliente.id === this.id){
                    cliente.nome = this.nome
                    cliente.nomeSocial = this.nomeSocial
                    cliente.cpf = this.cpf
                    cliente.rgs = this.rgs
                    cliente.telefones = this.telefones
                }
            })

            let clientes:Array<any> = []

            listaClientes.forEach(x => {
                clientes.push([x.nome, x.nomeSocial, x.cpf, x.rgs, x.telefones, x.id])
            })

            localStorage.setItem("clientes", JSON.stringify(clientes))
            limparLocalStorage()
            window.location.href = "/cliente"
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
            this.setState({
                nome: this.nome
            })
        }

        const handleNomeSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nomeSocial = e.target.value
            this.setState({
                nomeSocial: this.nomeSocial
            })
        }

        const handleValorCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valorCPF = e.target.value
            if (this.valorCPF.length === 11) {
                this.valorCPF = this.valorCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            }
            this.setState({valorCPF: this.valorCPF})
        }

        const handleDataCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.dataCPF = e.target.value
            this.setState({
                dataCPF: this.dataCPF
            })
        }

        return (
            <div className="item itemClienteEdit">
                <h2>Cliente com o ID <strong>{this.id}</strong></h2>
                <form>
                    <div className="input inputName">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" onChange={handleNomeChange} name="nome" id="nome" value={this.nome} placeholder="Nome" className="value" />
                    </div>
                    <div className="input inputNomeSocial">
                        <label htmlFor="nomeSocial">Nome Social</label>
                        <input type="text" onChange={handleNomeSocialChange} name="nomeSocial" id="nomeSocial" value={this.nomeSocial} placeholder="Nome social" className="value"/>
                    </div>
                    <div className="input inputCPF">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" onChange={handleValorCpfChange} name="cpf" id="cpf" value={this.valorCPF} placeholder="CPF" className="value" maxLength={14}/>
                        <input type="date" onChange={handleDataCpfChange} name="dataCPF" id="dataCPF" value={this.dataCPF.toString()} placeholder="Data de emissão" className="value"/>
                    </div>
                </form>
                <InputRG />
                <InputTelefone />
                <div className="sendForm">
                    <a href="/cliente" className="cancel">Cancelar</a>
                    <input type="button" onClick={handleSubmit} value="Atualizar" />
                </div>
            </div>
        )
    }
}

export default Item