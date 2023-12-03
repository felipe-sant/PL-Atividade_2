import { Component } from "react";
import Header from "../components/HeaderComponent";
import Main from "../components/clienteDeleteComponent";
import Footer from "../components/FooterComponent";

class ClientePageDelete extends Component {
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

export default ClientePageDelete;