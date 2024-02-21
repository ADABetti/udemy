function criarCarro(config) {
    var carro = { marca: "Default", aro: 16, tetoSolar: false, cor: "preto" };
    if (config.marca) {
        carro.marca = config.marca;
    }
    if (config.aro) {
        carro.aro = config.aro;
    }
    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar;
    }
    if (config.cor) {
        carro.cor = config.cor;
    }
    return carro;
}
var fusca = criarCarro({ marca: "Fusca", tetoSolar: false });
console.log(fusca);
