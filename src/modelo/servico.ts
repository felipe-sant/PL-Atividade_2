export default class Servico {
    public id!: number
    public nome!: string
    public valor: number = 0

    public updateServico(nome: string, valor:number): void {
        if (nome !== "") {
            this.nome = nome
        }
        if (valor !== 0) {
            this.valor = valor
        }
    }
}