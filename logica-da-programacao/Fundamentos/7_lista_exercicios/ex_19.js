function contarPalavras(frase) {
    const palavras = frase.split(" ") // método usado para separar strings
    return palavras.length
}

console.log(contarPalavras("Eu não entendi direito"));