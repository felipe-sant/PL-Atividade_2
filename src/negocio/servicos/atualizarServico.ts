import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Atualizacao from "../atualizar";

export default class AtualizarServico extends Atualizacao {
    private servico: Array<Servico>
    private id: number
    private nome: string
    private valor: number

    constructor(empresa: Empresa, id:number, nome: string, valor: number) {
        super()
        this.servico = empresa.getServicos
        this.id = id
        this.nome = nome
        this.valor = valor
    }

    public atualizar(): void {
        this.servico.forEach(servico => {
            if (servico.id === this.id) {
                servico.nome = this.nome
                servico.valor = this.valor
            }
        })

        localStorage.setItem("servicos", JSON.stringify(this.servico))
    }
}