let t = "tipo_de_"

let carro = {
    [t + "carro"]: "sedan",
    nome: "gol"
}

let aviao = {
    [t + "aviao"]: "boeing",
    nome: "Tam"
}

let barco = {
    [t + "barco"]: "lancha",
    nome: "Marina"
}

console.log(barco);
console.log(aviao);
console.log(carro);

console.log(barco.tipo_de_barco);