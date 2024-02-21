// se não definir todos os valores quando chama a função, ela
// considera o valor como undefined.

function somar(a, b, c, d) {
    return a + b + c + d;
}

console.log(somar(3, 2, 1));


// Usar valor padrão nos parâmetros da função.
function somar(a, b, c, d = 0) {
    return a + b + c + d;
}

console.log(somar(3, 2, 1));