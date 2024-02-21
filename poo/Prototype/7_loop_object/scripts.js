function Carro(marca, preco, cor) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
    this.cor = cor;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false; // essa prop é ignorada, pois a classe acima mostra como true

let fusca = new Carro("VW", 10000, "cinza");
console.log(fusca);

for (prop in fusca) {
    console.log(prop + " => " + fusca[prop]);
}