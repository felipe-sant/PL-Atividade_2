import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Empresa from "../../modelo/empresa"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private nome: string
    private nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private telefones: Array<Telefone>
    constructor(empresa:Empresa, nome:string, nomeSocial:string, cpf:CPF, rgs:Array<RG>, telefones:Array<Telefone>) {
        super()
        this.empresa = empresa
        this.clientes = empresa.getClientes
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.telefones = telefones
    }

    public cadastrar(): void {
        let idUltimoCliente = 0

        if (this.clientes.length !== 0) {
            idUltimoCliente = this.clientes[this.clientes.length-1].id
        }

        let id = 1
        if (this.clientes.length !== 0) {
            id = idUltimoCliente + 1
        }
        var cliente = new Cliente(this.nome, this.nomeSocial, this.cpf, id, this.rgs, this.telefones)
        this.clientes.push(cliente)
        this.empresa.setClientes(this.clientes)
    }
}