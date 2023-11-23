export default class Produto {
    public id!: number
    public nome!: string
    public valor!: number

    public updateProduto(nome:string, valor:number): void {
        if (nome !== "") {
            this.nome = nome
        }
        if (valor !== 0) {
            this.valor = valor
        }
    }
}