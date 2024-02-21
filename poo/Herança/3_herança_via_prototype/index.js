function Veiculo() { }
Veiculo.prototype.carenagem = "aço"
Veiculo.prototype.ligar = function () {
    console.log("ligou");
}

function Trem(tipo) {
    this.tipo = tipo;
}
Trem.prototype.vagoes = 50;

function Carro(modelo) {
    this.modelo = modelo;
}
Carro.prototype.pneus = 4;

Carro.prototype = new Veiculo; // herdou as props e métodos de veículo.
Trem.prototype = new Veiculo();

let bmw = new Carro("BMW");
let tremBala = new Trem("trem-bala");

tremBala.ligar();
console.log(tremBala.carenagem);
