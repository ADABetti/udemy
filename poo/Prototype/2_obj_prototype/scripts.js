function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype.rodas = 4;
Carro.prototype.ligar = function () {
    console.log("Carro ligou");
}

let bmw = new Carro("BMW", 200000);
console.log(bmw);

console.log(bmw.rodas);
bmw.ligar();