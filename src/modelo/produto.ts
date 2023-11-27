export default class Produto {
    public id!: number
    public nome!: string
    public valor!: number

    public setNome(nome: string) {
        this.nome = nome
    }

    public setValor(valor: number) {
        this.valor = valor
    }
}