import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private empresa:Empresa
    private servicos: Array<Servico>
    private nome: string
    private valor: number
    private id:number
    constructor(empresa: Empresa, nome:string, valor:string, id:string) {
        super()
        this.empresa = empresa
        this.servicos = empresa.getServicos
        this.nome = nome
        this.valor = new Number(valor).valueOf()
        this.id = new Number(id).valueOf()
    }

    public cadastrar(): void {
        let servico = new Servico()
        servico.id = this.id
        servico.nome = this.nome
        servico.valor = this.valor
        this.servicos.push(servico)
        this.empresa.setServicos(this.servicos)
    }
}