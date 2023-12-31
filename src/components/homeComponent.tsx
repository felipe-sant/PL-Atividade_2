import { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div className="main mainHome"> 
                <div className="navegacao">
                    <h1>Selecione uma opção: </h1>
                    <div className="opcoes">
                        <a href="/cliente" className="opcao cliente">
                            <h2>Cliente</h2>
                        </a>
                        <a href="/produto" className="opcao produto">
                            <h2>Produto</h2>
                        </a>
                        <a href="/servico" className="opcao servico">
                            <h2>Serviço</h2>
                        </a>
                    </div>
                </div>
                <button onClick={()=>{localStorage.clear()}}>limpar a porra toda</button>
            </div> 
        )
    }
}

export default Main;