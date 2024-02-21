function Ninja (nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function () {
        console.log("Atirou arma " + this.arma);
    }
}

let ninja1 = new Ninja("Naruto", "Shuriken");
console.log(ninja1);
console.log(ninja1.nome);
console.log(ninja1["arma"]);

ninja1.atirarArma();

let ninja2 = new Ninja("Susuzi", "metralhadora");
console.log(ninja2);
console.log(ninja2.arma);