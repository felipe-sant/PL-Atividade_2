import { Component } from "react"
import Telefone from "../modelo/telefone"

type Props = {
    ddd: string,
    numero: string,
    telefones: Array<Telefone>
}

class InputTelefone extends Component<{}, Props> {
    private ddd!: string
    private numero!: string
    private telefones: Array<Telefone> = [] // fazer essa porra funcionar na hora de pegar do localStorage

    constructor(props: {}) {
        super(props)
        let telefones = localStorage.getItem("clienteTelefones")
        telefones = telefones ? JSON.parse(telefones) : []
        let listaTelefones:Array<Telefone> = []
        if (telefones != null) {
            for (let i = 0; i < telefones.length; i++) {
                // @ts-ignore
                listaTelefones.push(new Telefone(telefones[i].ddd, telefones[i].numero))
            }
        }
        this.telefones = listaTelefones
        this.state = {
            ddd: this.ddd,
            numero: this.numero,
            telefones: this.telefones
        }
    }

    render() {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (this.ddd === undefined || this.numero === undefined || this.ddd === "" || this.numero === "") {
                alert("Preencha todos os campos do Telefone")
            } else {
                this.telefones.push(new Telefone(this.ddd, this.numero))

                this.ddd = ""
                this.numero = ""
                this.setState({ telefones: this.telefones })

                localStorage.setItem("clienteTelefones", JSON.stringify(this.telefones))
            }
        }

        const handleDddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.ddd = e.target.value
            this.setState({ ddd: this.ddd })
        }

        const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.numero = e.target.value
            if (this.numero.length === 9) {
                this.numero = this.numero.replace(/(\d{5})(\d{4})/, "$1-$2")    
            }
            this.setState({ numero: this.numero })
        }

        return (

            <div className="input inputArray inputTelefones">
                <form onSubmit={handleSubmit} className="formInput formInputTelefone">
                    <label htmlFor="telefone">Telefone</label>
                    <div className="input inputValues">
                        <input type="text" onChange={handleDddChange} name="ddd" id="ddd" placeholder="DDD" value={this.ddd} maxLength={2}/>
                        <input type="text" onChange={handleNumeroChange} name="numero" id="numero" placeholder="Número" value={this.numero} minLength={10} maxLength={10}/>
                    </div>
                    <div className="input inputSubmit">
                        <input type="submit" value=""/>
                    </div>
                </form>
                <hr />
                <table className="tableInput tableInputTelefone">
                    <tr>
                        <th>Telefone</th>
                    </tr>
                    {this.state.telefones.map((telefone) => {
                        return (
                            <tr>
                                <td>{telefone.getNumeroCompleto}</td>
                            </tr>   
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default InputTelefone