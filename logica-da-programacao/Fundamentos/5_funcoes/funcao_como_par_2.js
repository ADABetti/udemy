function executar(fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

// se não passei os valores do parâmetro => NaN
executar(somar, 50, 40); 
executar(subtrair);
executar(multiplicar);

// ============================
function bomDia(){
    return "Bom dia";
}
console.log(bomDia(10, 20)); // a função ingora parâmetros
