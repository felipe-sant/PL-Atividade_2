import { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div className="mainBackground">
                <div className="main"> 
                    <h1>Selecione uma opção</h1>
                    <div className="opcoes">
                        <a href="#" className="opcao cliente">
                            <h2>Cliente</h2>
                        </a>
                        <a href="#" className="opcao produto">
                            <h2>Produto</h2>
                        </a>
                        <a href="#" className="opcao servico">
                            <h2>Serviço</h2>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;