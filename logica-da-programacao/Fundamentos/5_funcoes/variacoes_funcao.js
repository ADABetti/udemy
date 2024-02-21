// #1 function com parâmetro e retorno (mais indicado):
function somar(a, b) {
    return (a + b);
}

var resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

// #2 function com parâmetro e SEM retorno:
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao(10, 5);

// #3 function SEM parâmetro e COM retorno:
function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual());

// #4 function SEM parâmetro e SEM retorno:
function exibirHoraAtual (){
    console.log(new Date().getHours());
}
exibirHoraAtual();