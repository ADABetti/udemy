function checarAnoBissexto(ano) {
    if ((ano % 100 !== 0 && ano % 4 === 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checarAnoBissexto(2024));