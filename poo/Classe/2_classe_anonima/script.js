let Carro = class { //classe anônima
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }
}

console.log(typeof Carro);

let corsa = new Carro("corsa", "vermelho");
console.log(corsa);

//==========================================

let Humano = class {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa() {
        return "O nome da pessoa é " + this.nome;
    }
}

let person1 = new Humano("João", 23);
console.log(person1);
console.log(person1.nomeDaPessoa());