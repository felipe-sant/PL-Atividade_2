import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/home";
import Cliente from "./pages/cliente";
import Produto from "./pages/produto";
import Servico from "./pages/servico";
import "./styles/styles.css";
import "./styles/rootDark.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
