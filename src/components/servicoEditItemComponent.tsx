import { Component } from "react";
import { petLovers } from "../dados";
import Servico from "../modelo/servico";
import AtualizarServico from "../negocio/servicos/atualizarServico";

type Props = {
    nome: string,
    valor: number,
}

class ServicoJson {
    public nome:string
    public valor:number
    public id:number

    constructor(nome:string, valor:string, id:string) {
        this.nome = nome
        this.valor = new Number(valor).valueOf()
        this.id =  new Number(id).valueOf()
    }
}

class Item extends Component<{id: number}, Props> {
    private servico!: Servico
    private id: number
    private nome!: string
    private valor!: number
    private servicoExiste: boolean = false

    constructor(props: any) {
        super(props)
        this.id = props.id
        this.servico = petLovers.getServicos.filter(servico => servico.id === this.id)[0]
        if (this.servico !== undefined) {
            this.servicoExiste = true
            this.nome = this.servico.nome
            this.valor = this.servico.valor
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
        if (this.servicoExiste === false) {
            return (
                <div className="item itemServicoEdit itemError">
                    <h2>Serviço com o ID: <strong>{this.id}</strong> não existe</h2>
                </div>
            )
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            let listaServicos = new Array<ServicoJson>
            let json = localStorage.getItem('servicos')
            json = json ? JSON.parse(json) : []

            if (json != null) {
                for (let i=0; i < json.length; i++) {
                    if (json[i]) {
                        let servico = json[i]
                        let nome = servico[0]
                        let valor = servico[1]
                        let id = servico[2]

                        listaServicos.push(new ServicoJson(nome,valor,id))
                    }
                }
            }

            listaServicos.forEach(servico => {
                if (servico.id === this.id) {
                    servico.nome = this.nome
                    servico.valor = this.valor
                }
            })

            let servicos:Array<any> = []

            listaServicos.forEach(x => {
                servicos.push([x.nome, x.valor, x.id])
            })

            localStorage.setItem("servicos", JSON.stringify(servicos))
            window.location.href = "/servico"
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
            <div className="item itemServicoEdit">
                <form onSubmit={handleSubmit}>
                    <div className="input inputNome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" value={this.nome} onChange={handleNomeChange}/>
                    </div>
                    <div className="input inputValor">
                        <label htmlFor="valor">Valor</label>
                        <input type="text" name="valor" id="valor" value={this.valor} onChange={handleValorChange}/>
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