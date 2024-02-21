function imprimirNome(obj) {
    console.log("esta pessoa se chama ".concat(obj.nome, " e tem ").concat(obj.idade, " anos."));
}
var pessoa1 = { nome: "Alice", idade: 27 };
imprimirNome(pessoa1);
var pessoa2 = { nome: "Maria", idade: 13 };
imprimirNome(pessoa2);
