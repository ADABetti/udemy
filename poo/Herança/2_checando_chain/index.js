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

function Carro(modelo) {
    this.modelo = modelo;
}

Carro.prototype = new Veiculo; // herdou as props e métodos de veículo.
let bmw = new Carro("BMW");

console.log(bmw instanceof (Carro));
console.log(tremBala instanceof (Trem));

console.log(bmw instanceof (Veiculo));
console.log(tremBala instanceof (Veiculo));

console.log(bmw instanceof (Object));
console.log(tremBala instanceof (Object));