import { Component } from "react"
import RG from "../modelo/rg"

type Props = {
    valorRG: string,
    dataRG: string,
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
        }
    }

    render() {

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            this.rgs.push(new RG(this.valorRG, new Date(this.dataRG)))

            // fazer algum jeito de excluir dos dados dos inputs

            localStorage.setItem("clienteRGs", JSON.stringify(this.rgs))
        }

        const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.valorRG = e.target.value
            if (e.target.value.length === 9) {
                e.target.value = e.target.value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
            }
        }

        const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.dataRG = e.target.value
        }

        return (
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
        )
    }
}

export default InputRG