function somarArray(numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i];
    }
    return resultado;
}

console.log(somarArray([400,200,500,500]));