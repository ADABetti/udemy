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

class Ninja extends Humano {
  classe: string;
  constructor (nome:string, idade:number, classe:string) {
    super(nome, idade); // herdou heranças do pai "Humano"
    this.classe = classe;
  }
  ninjaAtirou () {
    console.log("ninja atirou Shuriken");
  }
}

let alice = new Ninja ("Alice", 27, "samurai");
console.log(alice);
console.log(alice.apresentarHumano());
alice.ninjaAtirou();