let pessoa = {
    nome: "Alice",
    exibirNome: function () {
        console.log("Meu nome é " + this.nome);
    }
}

console.log(pessoa.nome);
pessoa.exibirNome();