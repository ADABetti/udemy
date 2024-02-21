class Tenis {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }
    set trocarCor(novaCor) {
        this.cor = novaCor;
    }

    get receberNomeDoModelo() {
        return "O modelo do tênis é " + this.modelo;
    }
}

let allstar = new Tenis("allstar", "verde");
console.log(allstar);
allstar.trocarCor = "azul";
console.log(allstar);
console.log(allstar.cor);
console.log(allstar.receberNomeDoModelo);