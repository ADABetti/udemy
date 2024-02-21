let carro = {
    modelo: "SUV",
}
carro.preco = 40000; // propriedade adicionada

delete carro.modelo;
console.log(carro);
console.log(carro.modelo); // propriedade foi escluida anteriormente