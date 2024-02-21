function contarCaractere(caractere, frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === caractere)
            contador = contador + 1
    }
    return contador
}

console.log(contarCaractere("s", "isso é um teste"));