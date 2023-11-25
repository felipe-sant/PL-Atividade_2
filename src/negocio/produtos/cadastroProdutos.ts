import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private nome: string
    private valor: number
    constructor(produtos: Array<Produto>, nome: string, valor: number) {
        super()
        this.produtos = produtos
        this.nome = nome
        this.valor = valor
    }

    public cadastrar(): Produto {
        let idUltimoProduto = 0

        if (this.produtos.length !== 0) {
            idUltimoProduto = this.produtos[this.produtos.length-1].id
        }

        let id = 1
        if (this.produtos.length !== 0) {
            id = idUltimoProduto + 1
        }

        let produto = new Produto()
        produto.id = id
        produto.nome = this.nome
        produto.valor = this.valor

        return produto
    }
}