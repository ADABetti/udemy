let pessoa = {
    nome: "Maria Pera",
    idade: 45,
    caracteristicas: {
        cnh: true,
        carteira: ["dinheiro", "documento", "moedas"],
    }
}

console.log(pessoa.caracteristicas);
console.log(pessoa.caracteristicas.carteira[0]);
console.log(pessoa.caracteristicas.cnh);