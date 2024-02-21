var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Ninja = /** @class */ (function (_super) {
    __extends(Ninja, _super);
    function Ninja(nome, idade, classe) {
        var _this = _super.call(this, nome, idade) || this;
        _this.classe = classe;
        return _this;
    }
    Ninja.prototype.ninjaAtirou = function () {
        console.log("ninja atirou Shuriken");
    };
    return Ninja;
}(Humano));
var alice = new Ninja("Alice", 27, "samurai");
console.log(alice);
console.log(alice.apresentarHumano());
alice.ninjaAtirou();
