// 1) Objetos criados através do retorno de uma função:
function criarArvore(nome, fruto) {
    return {
        nome: nome,
        fruto: fruto,
    }
}

let arvore1 = criarArvore("laranjeira", true);
console.log(arvore1 instanceof criarArvore);
console.log(arvore1 instanceof Object);

//===============================================================

//2) Através da função sem retorno

function Carro(modelo, portas, tetoSolar) {
    this.modelo = modelo;
    this.portas = portas;
    this.tetoSolar = tetoSolar;
}

let carro1 = new Carro("Fusca", 2, false);
console.log(carro1 instanceof Carro);
// =============================================

let usuario = {
    nome: "Luisa",
    login: 4534534,
    idade: 16,
}

console.log(usuario instanceof Object);