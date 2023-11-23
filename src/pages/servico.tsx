import { Component } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import Main from "../components/servicoComponent";

class Servico extends Component {
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

export default Servico;