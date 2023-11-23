import { Component } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";

class Cliente extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Cliente</h1>
        <Footer />
      </div>
    );
  }
}

export default Cliente;
