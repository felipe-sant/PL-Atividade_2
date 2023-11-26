import Empresa from "./modelo/empresa";

/*
localStorage.clear()
*/

export var petLovers = new Empresa()

let listaProdutos = localStorage.getItem('produtos')
petLovers.setProdutos(listaProdutos ? JSON.parse(listaProdutos) : [])

console.log(petLovers)
console.log(localStorage.getItem('petLovers'))
console.log("")