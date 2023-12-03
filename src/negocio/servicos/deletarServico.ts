import Deletar from "../deletar";

let servico = localStorage.getItem('servicos')

export default class DeletarServico extends Deletar {
    private servicos: any
    private id: number

    constructor(id:number) {
        super()
        this.servicos = servico
        this.id = id
    }

    public deletar(): void {
        console.log(this.servicos)
        this.servicos = this.servicos ? JSON.parse(this.servicos) : []
        this.servicos = this.servicos.filter((servico:any) => {
            return servico[2] != this.id
        })
        console.log(this.servicos)
        localStorage.setItem('servicos', JSON.stringify(this.servicos))
    }
}