function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false; // essa prop é ignorada, pois a classe acima mostra como true

let fusca = new Carro("VW", 10000);

if (fusca.hasOwnProperty("calota")) {
    console.log("está prop pertence ao objeto");
} else if (fusca.constructor.prototype.hasOwnProperty("calota")) {
    console.log("está prop pertence ao prototype");
} else {
    console.log("essa propriedade não existe");
}
