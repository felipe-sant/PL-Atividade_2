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
    private id:number
    constructor(empresa:Empresa, nome:string, nomeSocial:string, cpf:CPF, rgs:Array<RG>, telefones:Array<Telefone>, id:string) {
        super()
        this.empresa = empresa
        this.clientes = empresa.getClientes
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.telefones = telefones
        this.id = new Number(id).valueOf()
    }

    public cadastrar(): void {
        var cliente = new Cliente(this.nome, this.nomeSocial, this.cpf, this.id, this.rgs, this.telefones)
        this.clientes.push(cliente)
        this.empresa.setClientes(this.clientes)
    }
}