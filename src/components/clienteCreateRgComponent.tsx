import { Component } from "react"
import RG from "../modelo/rg"

type Props = {
    valorRG: string,
    dataRG: string,
    rgs: Array<RG>
}

class InputRG extends Component<{}, Props> {
    private valorRG!: string
    private dataRG!: string
    private rgs: Array<RG> = []

    constructor(props: {}) {
        super(props)
        this.state = {
            valorRG: this.valorRG,
            dataRG: this.dataRG,
            rgs: [new RG("00.00.000-0", new Date("1111-11-11"))]
        }
    }

    render() {
        const addUmDia = (data: Date) => {
            let nova_data = new Date(data)
            nova_data.setDate(nova_data.getDate() + 1)
            return nova_data
        }

        const dataToString = (data: Date) => {
            let nova_data = addUmDia(data)

            let dia = (nova_data.getDate()).toString()
            let mes = (nova_data.getMonth() + 1).toString()
            let ano = nova_data.getFullYear().toString()

            if (dia.length === 1) {
                dia = "0" + dia
            }

            if (mes.length === 1) {
                mes = "0" + mes
            }

            if (ano == "1111") {
                return "00" + "/" + "00" + "/" + "0000"
            }

            return dia + "/" + mes + "/" + ano
        }

        const tratametoRG = (rg: string) => {
            if (rg.length === 9) {
                rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
            }
            return rg
        }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(this.dataRG)
            this.rgs.push(new RG(this.valorRG, new Date(this.dataRG)))

            this.valorRG = ""
            this.dataRG = ""
            this.setState({rgs: this.rgs})

            localStorage.setItem("clienteRGs", JSON.stringify(this.rgs))
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valorRG = e.target.value
            if (this.valorRG.length === 9) {
                this.valorRG = this.valorRG.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
            }
            this.setState({valorRG: this.valorRG})
        }

        const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.dataRG = e.target.value
            this.setState({dataRG: this.dataRG})
        }

        return (
            <div className="input inputArray inputRGs">
                <form onSubmit={handleSubmit} className="formInput formInputRG">
                    <label htmlFor="rg">RG</label>
                    <div className="input inputValues">
                        <input type="text" onChange={handleValorChange} name="valorRG" id="valorRG" value={this.valorRG} placeholder="00.000.000-0" maxLength={12} minLength={12}/>
                        <input type="date" onChange={handleDataChange} name="dataRG" id="dataRG" value={this.dataRG} placeholder="Data de emissão do RG"/>
                    </div>
                    <div className="input inputSubmit">
                        <input type="submit" value=""/>
                    </div>
                </form>
                <hr />
                <table className="tableInput tableInputRG">
                    <tr>
                        <th>RG</th>
                        <th className="center">Data de emissão</th>
                    </tr>
                    {this.state.rgs.map((rg) => {
                        return (
                            <tr>
                                <td>{tratametoRG(rg.valor)}</td>
                                <td className="center">{dataToString(rg.dataEmissao)}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default InputRG