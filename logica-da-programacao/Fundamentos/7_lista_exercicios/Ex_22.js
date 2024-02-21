function filtrarporQuantidadeDeDigitos(array, digitos) {
    return array.filter(numero => numero.length == digitos);
}

console.log(filtrarporQuantidadeDeDigitos([45, 43, 23, 1, 2], 2));