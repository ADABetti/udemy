function imprimirNome(obj: {nome:string, idade:number}) {
    console.log(`esta pessoa se chama ${obj.nome} e tem ${obj.idade} anos.`)
}

let pessoa1 = {nome: "Alice", idade:27};
imprimirNome(pessoa1);

let pessoa2 = {nome:"Maria", idade:13};
imprimirNome(pessoa2);