import { Component } from "react";
import Header from "../components/HeaderComponent";
import Main from "../components/clienteComponent";
import Footer from "../components/FooterComponent";

class Cliente extends Component {
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

export default Cliente;
