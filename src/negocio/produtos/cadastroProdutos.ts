import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private empresa:Empresa
    private produtos: Array<Produto>
    private nome: string
    private valor: number
    private id:number
    constructor(empresa:Empresa, nome: string, valor: string, id:string) {
        super()
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.nome = nome
        this.valor = new Number(valor).valueOf()
        this.id = new Number(id).valueOf()
    }

    public cadastrar(): void {
        let produto = new Produto()
        produto.id = this.id
        produto.nome = this.nome
        produto.valor = this.valor
        this.produtos.push(produto)
        this.empresa.setProdutos(this.produtos)
    }
}