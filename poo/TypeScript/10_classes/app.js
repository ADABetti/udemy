var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "o nome desse humano \u00E9 ".concat(this.nome, " e ele tem ").concat(this.idade);
    };
    return Humano;
}());
var alice = new Humano("Alice", 27);
console.log(alice);
console.log(alice.apresentarHumano());
