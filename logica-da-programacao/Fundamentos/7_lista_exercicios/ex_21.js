function retornarSegundoMaior(numeros) {
    let maiorValor = Math.max(...numeros);
    let indexMaiorValor = numeros.indexOf(maiorValor);
    numeros.splice(indexMaiorValor, 1);
    return Math.max(...numeros);

}
console.log(retornarSegundoMaior([4, 5, 6, 7, 8, 10, 17]));
