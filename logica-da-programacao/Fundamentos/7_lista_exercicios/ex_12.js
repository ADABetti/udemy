function retornarNumerosParesdeIndicesPares(numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i += 2) { // acessar o índice par
        const numeroPar = numeros[i] % 2 === 0; //acessar o valor par

        if (numeroPar)
            resultado.push(numeros[i]);
    }
    return resultado;

}

console.log(retornarNumerosParesdeIndicesPares([10,12,14,16]));