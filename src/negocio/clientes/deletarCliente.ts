import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

let clientes = localStorage.getItem('clientes')

export default class DeletarCliente extends Deletar {
    private clientes: any
    private idCliente: number
    constructor(idCliente: number) {
        super()
        this.clientes = clientes
        this.idCliente = idCliente
    }

    public deletar():void {
        console.log(this.clientes)
        this.clientes = this.clientes ? JSON.parse(this.clientes) : []
        this.clientes = this.clientes.filter((cliente:any) => {
            return cliente[5] != this.idCliente
        })
        console.log(this.clientes)
        localStorage.setItem('clientes', JSON.stringify(this.clientes))
    }
}