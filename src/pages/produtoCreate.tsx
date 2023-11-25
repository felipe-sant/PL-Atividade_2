import { Component } from "react";
import Empresa from "../modelo/empresa";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import Main from "../components/produtoCreateComponent";

class ProdutoPageCreate extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mainBackground">
                    <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProdutoPageCreate;