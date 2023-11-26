import Empresa from "./modelo/empresa";

/*
localStorage.clear()
*/

export var petLovers = new Empresa()

let listaProdutos = localStorage.getItem('produtos')
petLovers.setProdutos(listaProdutos ? JSON.parse(listaProdutos) : [])
let listaServicos = localStorage.getItem('servicos')
petLovers.setServicos(listaServicos ? JSON.parse(listaServicos) : [])

console.log(petLovers)
console.log(localStorage.getItem('produtos'))
console.log("")