function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype = {
    rodas: 4,
    portas: 4,
    ligar() {
        console.log("Carro ligou")
    }
}

Carro.prototype.aro = 20;
Carro.prototype.modelo = "esport";

let bmw = new Carro("BMW", 200000);
console.log(bmw);

console.log(bmw.rodas);
bmw.ligar();
console.log(bmw.aro);
console.log(bmw.modelo);

let ferrari = new Carro("Ferrari");
Carro.prototype.tetoSolar = true;
Carro.prototype.abrirTetoSolar = function () {
    console.log("O teto abriu");
}

console.log(bmw.tetoSolar);
console.log(ferrari.tetoSolar);
ferrari.abrirTetoSolar();
ferrari.abrirTetoSolar();
