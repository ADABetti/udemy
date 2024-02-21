// 1) Objetos criados através do retorno de uma função:
function criarArvore (nome, fruto){
    return{
nome: nome,
fruto: fruto,
    }
}

console.log(criarArvore("macieira", true));

let arvore1 = criarArvore("mangueira",true);
console.log(arvore1);
console.log(arvore1.constructor); // entender a origem do objeto.

//===============================================================

//2) Através da função sem retorno

function Carro (modelo, portas, tetoSolar) {
    this.modelo = modelo;
    this.portas = portas;
    this.tetoSolar = tetoSolar;
}

let carro1 = new Carro("Gol", 4, false);
console.log(carro1);
console.log(carro1.constructor);

// =============================================

let usuario = {
    nome: "Luisa",
    login: 4534534,
    idade: 16,
}
console.log(usuario);
console.log(usuario.constructor);
