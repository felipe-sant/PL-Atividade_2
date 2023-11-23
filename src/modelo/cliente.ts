import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id:number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones!: Array<Telefone>
    private produtosConsumidos!: Array<Produto>
    private servicosConsumidos!: Array<Servico>
    private pets!: Array<Pet>
    public valorTotalConsumido: number = 0
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>, telefones: Array<Telefone>, pets:Array<Pet>, produtosConsumidos:Array<Produto>, servicosConsumidos: Array<Servico>)
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>, telefones: Array<Telefone>, pets:Array<Pet>, produtosConsumidos:Array<Produto>)
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>, telefones: Array<Telefone>, pets:Array<Pet>)
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>, telefones: Array<Telefone>)
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>)
    constructor(nome: string, nomeSocial: string, cpf: CPF, id:number, rgs: Array<RG>, telefones?: Array<Telefone>, pets?:Array<Pet>, produtosConsumidos?:Array<Produto>, servicosConsumidos?: Array<Servico>)
     {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        if (telefones !== undefined) {
            this.telefones = telefones
        } else {
            this.telefones = []
        }
        if (produtosConsumidos !== undefined) {
            this.produtosConsumidos = produtosConsumidos
        } else {
            this.produtosConsumidos = []
        }
        if (servicosConsumidos !== undefined) {
            this.servicosConsumidos = servicosConsumidos
        } else {
            this.servicosConsumidos = []
        }
        if (pets !== undefined) {
            this.pets = pets
        } else {
            this.pets = []
        }
    }

    public get getId():number { return this.id }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public setServicosConsumidos(servicosConsumidos: Array<Servico>) {
        this.servicosConsumidos = servicosConsumidos
    }

    public get getPets(): Array<Pet>{
        return this.pets
    }

    public updateCliente(newNome:string, newNomeSocial:string, newCPF:CPF, newRgs:Array<RG>, newTelefones:Array<Telefone>, newPets:Array<Pet>) {
        this.nome = newNome
        this.nomeSocial = newNomeSocial
        this.cpf = newCPF
        this.rgs = newRgs
        this.telefones = newTelefones
        this.pets = newPets
    }

    public updateValorTotalConsumido(valor:number) {
        this.valorTotalConsumido = this.valorTotalConsumido + valor
    }
}