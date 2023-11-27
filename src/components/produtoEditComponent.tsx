import { Component, useState } from "react";
import Item from "./produtoEditItemComponent";

type Props = {
    id: number
    div: JSX.Element
}

class Main extends Component<{}, Props> {
    public id!: any
    
    constructor(props: {}) {
        super(props)
        this.state = {
            id: this.id,
            div: <div></div>
        }
    }

    render() {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (this.id !== undefined) {
                this.setState({div: <Item id={this.id}/>})
            }
        }

        const handleIdClick = (e: React.MouseEvent<HTMLInputElement>) => {
            this.id = undefined
            this.setState({div: <div></div>})
        }

        const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.id = Number(e.target.value)
            this.setState({id: this.id})
        }

        return (
            <div className="main mainProdutoEdit mainForm">
                <h1>Alterando o produto</h1>
                <form onSubmit={handleSubmit} className="search">
                    <div className="input inputId">
                        <label htmlFor="id">Id</label>
                        <div>
                            <input type="text" name="id" id="id" value={this.id} placeholder="0" className="value" onChange={handleIdChange} onClick={handleIdClick}/>
                            <input type="submit" className="search" value=""/> 
                        </div>
                    </div>
                </form>
                <div>
                    {this.state.div}
                </div>
            </div>
        )
    }
}

export default Main