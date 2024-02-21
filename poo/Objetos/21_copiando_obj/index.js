let pessoa = {
    nome: "Matheus",
    sayName() {
        console.log("Meu nome é " + this.nome);
    }
}

let pessoa2 = {
    nome: "Juma",
    age: 15,

}

Object.assign(pessoa2, pessoa); // método que copia objetos
console.log(pessoa2);
pessoa2.sayName();
