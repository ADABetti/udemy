function simboloMais(numero) {
    let total = "";
    for (let i = 0; i < numero; i++) {
        total = total + "+";
    }
    return total;
}

console.log(simboloMais(10));

//============================================
function teste2 (numero){
    return Array(numero).fill("+").join("");
}

console.log(teste2(4));

//============================================
function teste3 (numero){
    return "+".repeat(numero);
}

console.log(teste3(4));
