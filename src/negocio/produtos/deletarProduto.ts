import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Deletar from "../deletar";

export default class DeletarProduto extends Deletar {
    private produtos: Array<Produto>
    private id: number
    private entrada: any
    constructor(empresa: Empresa, id:number) {
        super()
        this.produtos = empresa.getProdutos
        this.id = id
    }

    public produtoExiste(): boolean {
        this.entrada = this.produtos.filter(produto => produto.id === this.id)
        if (this.entrada.length === 0) {
            return false
        }
        return true
    }

    public deletar(): void {
        this.produtos = this.produtos.filter(produto => produto.id !== this.id)
        localStorage.setItem("produtos", JSON.stringify(this.produtos))
    }
}