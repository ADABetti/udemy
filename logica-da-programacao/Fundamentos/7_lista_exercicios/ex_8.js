function multiplicarValores(x, y) {
    if (x <= 0 || y <= 0) { return "valor inválido" };

    let total = 0
    for (let i = 1; i <= y; i++) {
        total = total + x;
    }
    return total
}

console.log(multiplicarValores(2, 1));
