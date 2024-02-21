class Animal {
    constructor(familia, nome) {
        this.familia = familia;
        this.nome = nome;
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("au, au");
    }
}

let bob = new Cachorro("mamífero", "Bob");
console.log(bob);

// ================================================

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log("Olá bonitinho");
    }
}

class Engenheiro extends Humano {  //extends fez a herança do pai (humano)
    constructor(nome, idade, espec) { // espec é do filho/subclass
        super(nome, idade); // propriedades do pai
        this.profissao = "engenheiro";
        this.especializacao = espec;
    }
}

let mario = new Engenheiro('Mario', 40, 'mecânica');
console.log(mario);
mario.falar();