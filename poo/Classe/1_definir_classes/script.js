class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }
}

console.log(typeof Carro);

let corsa = new Carro("corsa", "vermelho");
console.log(corsa);

//==========================================

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let person1 = new Humano("João", 23);
console.log(person1);