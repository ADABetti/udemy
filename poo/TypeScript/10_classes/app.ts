class Humano {
    nome:string;
    idade: number;
  constructor(nome: string, idade:number){
    this.nome = nome;
    this.idade = idade;
  }  
apresentarHumano () {
    return `o nome desse humano é ${this.nome} e ele tem ${this.idade}`;
}
}

let alice = new Humano ("Alice", 27);
console.log(alice);
console.log(alice.apresentarHumano());