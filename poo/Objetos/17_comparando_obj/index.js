function Ninja (nome, arma){
    this.nome = nome;
    this.arma = arma;
}

let naruto = new Ninja ("Naruto","shuriken");
let shakoshima = new Ninja ("Shakoshima","punhos");
let cloneNaruto = new Ninja ("Naruto","shuriken");
let cloneVerdadeiroNaruto = naruto; // fazer referência para ser true

console.log(naruto === shakoshima); // output é false
console.log(naruto === cloneNaruto); // output é false
console.log(naruto === cloneVerdadeiroNaruto) // output é true

