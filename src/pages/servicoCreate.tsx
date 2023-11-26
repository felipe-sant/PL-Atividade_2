import { Component } from "react";
import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";
import Main from "../components/servicoCreateComponent";

class ServicoPageCreate extends Component {
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

export default ServicoPageCreate;