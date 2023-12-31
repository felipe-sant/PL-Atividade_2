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
import "./styles/item.css";
import "./styles/popup.css";
import Empresa from "./modelo/empresa";
import ServicoPageCreate from "./pages/servicoCreate";
import ProdutoPageDelete from "./pages/produtoDelete";
import ServicoPageDelete from "./pages/servicoDelete";
import ProdutoPageEdit from "./pages/produtoEdit";
import ServicoPageEdit from "./pages/servicoEdit";
import ClientePageCreate from "./pages/clienteCreate";
import ClientePageDelete from "./pages/clienteDelete";
import ClientePageEdit from "./pages/clienteEdit";

class App extends Component<{empresa: Empresa}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cliente" element={<ClientePage />} />
          <Route path="/cliente/create" element={<ClientePageCreate />} />
          <Route path="/cliente/edit" element={<ClientePageEdit />} />
          <Route path="/cliente/delete" element={<ClientePageDelete />} />

          <Route path="/produto" element={<ProdutoPage />} />
          <Route path="/produto/create" element={<ProdutoPageCreate />} />
          <Route path="/produto/edit" element={<ProdutoPageEdit />} />
          <Route path="/produto/delete" element={<ProdutoPageDelete />} />

          <Route path="/servico" element={<ServicoPage />} />
          <Route path="/servico/create" element={<ServicoPageCreate />} />
          <Route path="/servico/edit" element={<ServicoPageEdit />} />
          <Route path="/servico/delete" element={<ServicoPageDelete />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
