function Veiculo() {
    this.carenagem = "aço"
    this.ligar = function () {
        console.log("ligou");
    }
}

function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 60;
}

Trem.prototype = new Veiculo();
let tremBala = new Trem("trem-bala");

console.log(tremBala.tipo);
tremBala.ligar();

function Carro(modelo) {
    this.modelo = modelo;
}

Carro.prototype = new Veiculo; // herdou as props e métodos de veículo.
let bmw = new Carro("BMW");
bmw.ligar();
