export default class Pet {
    private id:number
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(id:number, nome: string, raca: string, genero: string, tipo: string) {
        this.id = id
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getId(){return this.id}
    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public updatePet(newNome:string, newRaca:string, newGenero:string, newTipo:string){
        this.nome = newNome
        this.raca = newRaca
        this.genero = newGenero
        this.tipo = newTipo
    }
}