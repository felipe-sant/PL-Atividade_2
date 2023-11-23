import { Component } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";

class Produto extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainBackground">
          <h1>Produto</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Produto;