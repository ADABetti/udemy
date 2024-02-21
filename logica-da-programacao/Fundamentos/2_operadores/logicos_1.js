var temDinheiro = true;
var estaEnsolarado = false;
var estaNaGaragem = true;

var resultadoE = "vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

var resultadoOU = "vai pro shopping? ";
resultadoOU += estaEnsolarado || estaNaGaragem;
console.log(resultadoOU);

// Ou exclusivo:
console.log(false != true);
console.log(false != false);
console.log(true != true);
console.log(true!= false);