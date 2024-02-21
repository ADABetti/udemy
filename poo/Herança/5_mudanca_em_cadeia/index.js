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

//copiando a classe, em vez de instanciar o prototype
Carro.prototype = Veiculo.prototype; // herdou as props e métodos de veículo.
Trem.prototype = Veiculo.prototype;

Carro.prototype.ligar = function () {  // esse método passa a ser o do pai.
    console.log("O carro ligou");
}

let bmw = new Carro("BMW");
let tremBala = new Trem("trem-bala");

tremBala.ligar();
bmw.ligar()
console.log(tremBala.carenagem);
