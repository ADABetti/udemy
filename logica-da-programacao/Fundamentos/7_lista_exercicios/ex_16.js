function retornarAreaDoTriangulo(base, altura) {
    let area = base * altura / 2
    return area.toFixed(2);
}

console.log(retornarAreaDoTriangulo(9.25, 13.1));