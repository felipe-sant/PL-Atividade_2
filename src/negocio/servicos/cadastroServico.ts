import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private nome: string
    private valor: number

    constructor(empresa: Empresa, nome:string, valor:number) {
        super()
        this.servicos = empresa.getServicos
        this.nome = nome
        this.valor = valor
    }

    public cadastrar(): void {
        let idUltimoServico = 0
        if (this.servicos.length !== 0) {
            idUltimoServico = this.servicos[this.servicos.length-1].id
        }

        let id = 1
        if (this.servicos.length !== 0) {
            id = idUltimoServico + 1
        }

        let servico = new Servico()
        servico.id = id
        servico.nome = this.nome
        servico.valor = this.valor

        this.servicos.push(servico)

        localStorage.setItem("servicos", JSON.stringify(this.servicos))
    }
}