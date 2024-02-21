let carro = {
    modelo: "SUV",
}
carro.preco = 40000; // propriedade adicionada
console.log(carro);

if (carro.preco > 39000) {
    carro.tetoSolar = true; // propriedade adicionada
}
console.log(carro);

carro.acelerar = function () {
    console.log("Vruuuuuuum");
}
console.log(carro);
carro.acelerar();