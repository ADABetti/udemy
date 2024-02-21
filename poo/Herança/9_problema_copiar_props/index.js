function extend(Filho, Pai) {
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for (let i in paiProto) {
        filhoProto[i] = paiProto[i];
    }
    // filho tem acesso ao obj pai
    filhoProto.uber = paiProto;
}

function Veiculo() { }
Veiculo.prototype.carenagem = "aço"
Veiculo.prototype.itens = ["teto-solar", "blindagem", "motor-turbo"];
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

//construtor temporário por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);

//adicionando itens aos itens
Trem.prototype.itens.push("janelas fixas");

Carro.prototype.ligar = function () {  // esse método passa a ser o do pai.
    console.log("O carro ligou");
}

Trem.prototype.ligar = function () {  // esse método passa a ser o do pai.
    console.log("piui");
}

let bmw = new Carro("BMW");
let tremBala = new Trem("trem-bala");

console.log(tremBala.itens);
console.log(bmw.itens);
