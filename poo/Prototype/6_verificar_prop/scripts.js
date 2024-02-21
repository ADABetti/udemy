function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false; // essa prop é ignorada, pois a classe acima mostra como true

let fusca = new Carro("VW", 10000);
console.log(fusca.cor); // output é preto

fusca.cor = "rosa";
console.log(fusca.cor); // output é rosa

console.log(fusca.calota);

delete fusca.calota;
console.log(fusca.calota); // obj [] -> prototype [dado];

console.log(fusca.hasOwnProperty("marca")); // Output true, o objeto tem a prop marca
console.log(fusca.constructor.prototype.hasOwnProperty("marca")); // Output falso prototype não tem a prop marca