let objeto = {
    nome: "caneta",
    preco: 1,
    canetaFunciona: true,
    cores: ["azul", "preta", "vermelha"],
}

console.log(objeto);

//===============================================

function Objeto(produto, preco, funciona, cores) {
    this.produto = produto;
    this.preco = preco;
    this.funciona = funciona;
    this.cores = cores;
}

let caneta = new Objeto("caneta", 1, true, ["azul", "preta", "vermelha"]);
console.log(caneta);

//===========================================================================

function criarObjeto(produto, preco, funciona, cores) {
    return {
        produto: produto,
        preco: preco,
        funciona: funciona,
        cores: cores,
    }
}

let caneta2 = criarObjeto("caneta", 1, true, ["azul", "preta", "vermelha"]);
console.log(caneta2);
console.log(caneta2.produto);
console.log(caneta2.funciona);
console.log(caneta2.cores);