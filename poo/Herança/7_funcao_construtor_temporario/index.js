function extend(Filho, Pai) {
    let F = function () { }
    F.prototype = Pai.prototype;
    Filho.prototype = new F();

}

function Veiculo() { }
Veiculo.prototype.carenagem = "aço"
Veiculo.prototype.ligar = function () {
    console.log("ligou");
}

function Carro(modelo) {
    this.modelo = modelo;
}
Carro.prototype.pneus = 4;

function Trem(tipo) {
    this.tipo = tipo;
}
Trem.prototype.vagoes = 50;

//copiando a classe, em vez de instanciar o prototype
Carro.prototype = Veiculo.prototype; // herdou as props e métodos de veículo.

//construtor temporário por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);


Carro.prototype.ligar = function () {  // esse método passa a ser o do pai.
    console.log("O carro ligou");
}

Trem.prototype.ligar = function () {  // esse método passa a ser o do pai.
    console.log("piui");
}

let bmw = new Carro("BMW");
let tremBala = new Trem("trem-bala");

tremBala.ligar();
bmw.ligar()
console.log(tremBala.carenagem);
