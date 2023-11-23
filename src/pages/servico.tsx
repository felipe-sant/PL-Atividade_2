import { Component } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";

class Servico extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainBackground">
          <h1>Servico</h1>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Servico;