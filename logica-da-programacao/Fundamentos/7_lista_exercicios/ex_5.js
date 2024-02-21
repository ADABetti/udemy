function retornarPrimeiroValor(n1, n2) {
    if (n1 > n2 || n1 === n2) {
        return true;
    } else {
        return false;
    }
}

console.log(retornarPrimeiroValor(5, 6));

//==========================================

function teste(n1, n2) {
    return n1 > n2 || n1 === n2 ? true : false;
}

console.log(teste(6, 9));

//===========================================

function maiorIgualPrimeiro(n1, n2) {
    if (typeof n1 !== typeof n2 || n1 < n2) {
        return false;
    } else if (n1 >= n2) {
        return true;
    }
}

console.log(maiorIgualPrimeiro(5, 6));