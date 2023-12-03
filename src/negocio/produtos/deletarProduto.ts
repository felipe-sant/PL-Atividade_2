import Deletar from "../deletar";

let produtos = localStorage.getItem('produtos')

export default class DeletarProduto extends Deletar {
    private produtos: any
    private id: number

    constructor(id:number) {
        super()
        this.produtos = produtos
        this.id = id
    }

    public deletar(): void {
        console.log(this.produtos)
        this.produtos = this.produtos ? JSON.parse(this.produtos) : []
        this.produtos = this.produtos.filter((produto:any) => {
            return produto[2] != this.id
        })
        console.log(this.produtos)
        localStorage.setItem('produtos', JSON.stringify(this.produtos))
    }
}