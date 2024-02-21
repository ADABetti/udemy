let carro = {
    portas: 4,
    tetoSolar: true,
    banco: "couro",
}

let portas = 0;
({portas} = carro);

console.log(portas); // varíavel mudou de valor de acordo com prop. do objeto
console.log(carro.portas);
console.log(carro);