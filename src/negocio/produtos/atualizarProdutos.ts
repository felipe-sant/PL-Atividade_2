import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Atualizacao from "../atualizar";

export default class AtualizarProduto extends Atualizacao {
    private produtos: Array<Produto>
    private id: number
    private nome: string
    private valor: number

    constructor(empresa: Empresa, id:number, nome: string, valor: number) {
        super()
        this.produtos = empresa.getProdutos
        this.id = id
        this.nome = nome
        this.valor = valor
    }

    public atualizar(): void {
        this.produtos.forEach(produto => {
            if (produto.id === this.id) {
                produto.nome = this.nome
                produto.valor = this.valor
            }
        })

        localStorage.setItem("produtos", JSON.stringify(this.produtos))
    }
}