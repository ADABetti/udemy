let teste = new Function(
    "a", // argumento
    "return arguments"
);

console.log(teste("testando")[0]);

function teste2(a) {
    return a;
}

console.log(teste2.length);
console.log(teste2.toString());

// ========================================

let a = {
    nome: "Leticia",
    falar: function () {
        console.log("Meu nome é " + this.nome);
    }
}

let b = {
    nome: "Juquinha",
}

a.falar.call(b);