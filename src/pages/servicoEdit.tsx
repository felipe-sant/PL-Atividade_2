import { Component } from "react";
import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";
import Main from "../components/servicoEditComponent";

class ServicoPageEdit extends Component {
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

export default ServicoPageEdit;