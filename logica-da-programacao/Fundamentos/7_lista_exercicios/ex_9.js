function repetirValor(valor, quantidade) {
    let resultado = [];
    for (let i = 1; i <= quantidade; i++) {
        resultado.push(valor);
    }
    return resultado;
}

console.log(repetirValor("código", 5));

function repetirValor(valor, quantidade) {
    return Array(quantidade).fill(valor);
}

console.log(repetirValor(9,2));