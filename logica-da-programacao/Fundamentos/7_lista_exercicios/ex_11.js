function retornarPrimeiroEUltimoelemento(array) {
    return array.splice(1, array.length - 2);
}

console.log(retornarPrimeiroEUltimoelemento([3, 5, 6, 7, 8, 9, 23, "olá"]));

function teste2(array) {
    let primeiroElemento = array[0];
    let ultimoElemento = array.pop();
    return [primeiroElemento, ultimoElemento]
}


console.log(teste2([3, 8, 7, 6, 5, 0]));
