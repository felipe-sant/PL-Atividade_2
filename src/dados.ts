import CPF from "./modelo/cpf";
import Empresa from "./modelo/empresa";
import CadastroCliente from "./negocio/clientes/cadastroCliente";
import RG from "./modelo/rg";
import Telefone from "./modelo/telefone";
import CadastroProduto from "./negocio/produtos/cadastroProdutos";

export var petLovers = new Empresa()
 
let listaClientes = localStorage.getItem('clientes')
listaClientes = listaClientes ? JSON.parse(listaClientes) : []
if (listaClientes != null) {
    for (let i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i]) {
            let cliente = listaClientes[i]
            let nome = cliente[0]
            let nomeSocial = cliente[1]
            // @ts-ignore
            let cpf = new CPF(cliente[2].valor, cliente[2].dataEmissao)
            let rgs: Array<RG> = []
            for (let i = 0; i < cliente[3].length; i++) {
                let rg = cliente[3][i]
                // @ts-ignore
                let valor = rg.valor
                // @ts-ignore
                let dataEmissao = rg.dataEmissao
                rgs.push(new RG(valor, dataEmissao))
            }
            let telefones: Array<Telefone> = []
            for (let i = 0; i < cliente[4].length; i++) {
                let telefone = cliente[4][i]
                // @ts-ignore
                let ddd = telefone.ddd
                // @ts-ignore
                let numero = telefone.numero
                telefones.push(new Telefone(ddd, numero))
            }
            let id = cliente[5]
            
            let cadastro = new CadastroCliente(petLovers, nome, nomeSocial, cpf, rgs, telefones, id)
            cadastro.cadastrar()
        }
    }
}

let listaProdutos = localStorage.getItem('produtos')
listaProdutos = listaProdutos ? JSON.parse(listaProdutos) : []
if (listaProdutos != null) {
    for (let i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i]){
            let produto = listaProdutos[i]
            let nome = produto[0]
            let valor = produto[1]
            let id = produto[2]

            let cadastro = new CadastroProduto(petLovers, nome, valor, id)
            cadastro.cadastrar()
        }
    }
}

console.log(listaProdutos)
console.log(petLovers.getProdutos)

/*
let listaClientes = localStorage.getItem('clientes')
petLovers.setClientes(listaClientes ? JSON.parse(listaClientes) : [])
let listaProdutos = localStorage.getItem('produtos')
petLovers.setProdutos(listaProdutos ? JSON.parse(listaProdutos) : [])
let listaServicos = localStorage.getItem('servicos')
petLovers.setServicos(listaServicos ? JSON.parse(listaServicos) : [])

console.log(petLovers.getClientes)
console.log(petLovers.getProdutos)
console.log(petLovers.getServicos)
console.log("")
*/