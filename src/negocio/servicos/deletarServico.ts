import { get } from "http";
import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Deletar from "../deletar";

export default class DeletarServico extends Deletar {
    private servicos: Array<Servico>
    private id: number

    constructor(empresa: Empresa, id:number) {
        super()
        this.servicos = empresa.getServicos
        this.id = id
    }

    public servicoExiste(): boolean {
        let produtos = this.servicos.filter(servico => servico.id === this.id)
        if (produtos.length === 0) {
            return false
        }
        return true
    }

    public deletar(): void {
        this.servicos = this.servicos.filter(servico => servico.id !== this.id)
        localStorage.setItem("servicos", JSON.stringify(this.servicos))
    }
}