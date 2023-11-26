import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/home";
import ClientePage from "./pages/cliente";
import ProdutoPage from "./pages/produto";
import ProdutoPageCreate from "./pages/produtoCreate";
import ServicoPage from "./pages/servico";
import "./styles/styles.css";
import "./styles/rootDark.css"
import "./styles/crud.css";
import "./styles/home.css";
import "./styles/form.css";
import Empresa from "./modelo/empresa";
import ServicoPageCreate from "./pages/servicoCreate";

class App extends Component<{empresa: Empresa}> {
  private empresa:Empresa

  constructor(props: any) {
    super(props)
    this.empresa = props.empresa
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<ClientePage />} />
          <Route path="/produto" element={<ProdutoPage/>} />
          <Route path="/produto/create" element={<ProdutoPageCreate/>} />
          <Route path="/servico" element={<ServicoPage />} />
          <Route path="/servico/create" element={<ServicoPageCreate />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
