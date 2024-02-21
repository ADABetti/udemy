function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    }
    return numero < minimo && numero > maximo;
}


console.log(estaEntre(7, 7, 9, ));