function descreverCarro(marca, aro) {
    if (aro) {
        console.log("Carro \u00E9 da marca ".concat(marca, " e aro \u00E9 ").concat(aro));
    }
    else {
        console.log("Carro \u00E9 da marca ".concat(marca));
    }
}
descreverCarro("fusca");
descreverCarro("BMW", 18);
