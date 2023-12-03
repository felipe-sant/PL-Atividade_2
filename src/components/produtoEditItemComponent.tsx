import { Component } from "react";
import { petLovers } from "../dados";
import Produto from "../modelo/produto";
import AtualizarProduto from "../negocio/produtos/atualizarProdutos";

type Props = {
    nome: string,
    valor: number,
}

class ProdutoJson {
    public nome:string
    public valor: number
    public id:number

    constructor(nome:string, valor:string, id:string) {
        this.nome = nome
        this.valor = new Number(valor).valueOf()
        this.id =  new Number(id).valueOf()
    }
}

class Item extends Component<{id:number}, Props> {
    private produto!: Produto
    private id: number
    private nome!: string
    private valor: number
    private produtoExiste: boolean = false
    
    constructor(props: any) {
        super(props)
        this.id = props.id
        this.produto = petLovers.getProdutos.filter(produto => produto.id === this.id)[0]
        if (this.produto !== undefined) {
            this.produtoExiste = true
            this.nome = this.produto.nome
            this.valor = this.produto.valor
        } else {
            this.nome = ""
            this.valor = 0
        }
        this.state = {
            nome: this.nome,
            valor: this.valor
        }
    }

    render() {
        if (this.produtoExiste === false) {
            return (
                <div className="item itemProdutoEdit itemError">
                    <h2>Produto com o ID: <strong>{this.id}</strong> não existe</h2>
                </div>
            )
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            let listaProdutos = new Array<ProdutoJson>
            let json = localStorage.getItem('produtos')
            json = json ? JSON.parse(json) : []

            if (json != null) {
                for (let i = 0; i < json.length; i++) {
                    if (json[i]){
                        let produto = json[i]
                        let nome = produto[0]
                        let valor = produto[1]
                        let id = produto[2]

                        listaProdutos.push(new ProdutoJson(nome,valor,id))
                    }
                }
            }

            listaProdutos.forEach(produto => {
                if (produto.id === this.id) {
                    produto.nome = this.nome
                    produto.valor = this.valor
                }
            })

            let produtos:Array<any> = []

            listaProdutos.forEach(x => {
                produtos.push([x.nome, x.valor, x.id])
            })

            localStorage.setItem("produtos", JSON.stringify(produtos))
            window.location.href = "/produto"
        }

        const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.nome = e.target.value
            this.setState({nome: this.nome})
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valor = Number(e.target.value)
            this.setState({valor: this.valor})
        }


        return (
            <div className="item itemProdutoEdit">
                <h2>Produto com o ID <strong>{this.produto.id}</strong></h2>
                <form onSubmit={handleSubmit}>
                    <div className="input inputName">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" value={this.nome} placeholder="Nome do produto" onChange={handleNomeChange}/>
                    </div>
                    <div className="input inputValue">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" name="valor" id="valor" value={this.valor} placeholder="0" onChange={handleValorChange}/>
                    </div>
                    <div className="input inputSubmit">
                        <input type="submit" value="Atualizar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Item