import { Component } from "react";
import Header from "../components/HeaderComponent";
import Main from "../components/produtoComponent";
import Footer from "../components/FooterComponent";
import Empresa from "../modelo/empresa";

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
    );
  }
}

export default ProdutoPageCreate;