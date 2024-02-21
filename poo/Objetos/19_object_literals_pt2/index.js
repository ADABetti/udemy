let portas = 4;
let aro = 20;
let rodas = 4;
let tetoSolar = true;

let carro = {
    portas,
    aro,
    rodas,
    tetoSolar,
    cor: "azul", // não é literal
    ligarCarro () { // é literal
        console.log("carro ligou");
    }
}

console.log(carro);
console.log(carro.rodas);
carro.ligarCarro()

//===================================

let olhos = "azuis";
let cabelo = "loiro";
let altura = 1.80;

let menino = {
    olhos,
    cabelo,
    altura,
    dizerAlgo (){
        console.log("Eu te amo :)");
    }
}

console.log(menino);
menino.dizerAlgo()