function funcaoDaSorte(numero) {
    let numeroSorteado = Math.floor(Math.random() * 10);
    if (numero === numeroSorteado) {
        return `Parabéns! O número sorteado foi ${numero}`;
    } else {
        return `Que pena! O número sorteado foi ${numeroSorteado}`;
    }
}

console.log(funcaoDaSorte(4));