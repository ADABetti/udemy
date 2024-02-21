let caracteristicas = {
    maos: 2,
    pes: 2,
    pernas: 2,
}

function Humano(nome) {
    this.nome = nome;
}

Humano.prototype = caracteristicas;// colocando essa linha de cod. o object Humano pertence ao object caracteristicas.

let pessoa1 = new Humano("Alice");

console.log(caracteristicas);
console.log(pessoa1);
console.log(caracteristicas.isPrototypeOf(pessoa1));

// =============================================================

let equipamentosDoCarro = {
    farol: true,
    aro: 18,
    motor: "4 válvulas",
}

function Carro(modelo) {
    this.modelo = modelo;
}

Carro.prototype = equipamentosDoCarro;
let corsa = new Carro("corsa");

console.log(corsa);
console.log(corsa.isPrototypeOf(Carro));
console.log(equipamentosDoCarro.isPrototypeOf(corsa));
console.log(Carro.isPrototypeOf(corsa));


console.log(Carro.isPrototypeOf(equipamentosDoCarro));
console.log(equipamentosDoCarro.isPrototypeOf(corsa));
console.log(corsa.aro)