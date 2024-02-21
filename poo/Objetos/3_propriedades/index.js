let carro = {
    portas: 4,
    cor: "vermelha",
}

console.log(carro.portas);
console.log(carro["cor"]);

if (carro.portas > 2) {
    console.log("Carro tem mais que duas portas");
}

let dadosUsuario = {
    nome: "João Bobo",
    idade: "33",
    altura: 1.70,
    profissao: "padeiro",
}

console.log(dadosUsuario)
console.log(dadosUsuario.nome);
console.log(dadosUsuario["profissao"]);
