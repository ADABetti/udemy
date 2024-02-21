let pessoa = {
    nome: "Maria Pera",
    idade: 45,
    falar: function () {
        console.log("Meu nome é " + this.nome);
    },
    envelhecer: function () {
        this.idade += 1;
    },
    dizerIdade() {
        console.log("Minha idade é: " + this.idade)
    },
    podeDirigir() {
        if (this.idade >= 18) {
            console.log("Pode dirigir");
        } else {
            console.log("Não pode dirigir ainda");
        }
    }
}

pessoa.falar();
pessoa.envelhecer();
console.log(pessoa.idade);
pessoa.dizerIdade();
pessoa.podeDirigir()

let calculadora = {
    numeros: 0,
    somar: function (a, b) {
        this.numeros = a + b;
    },
    subtrair(a) {
        this.numeros -= a; //variável armazenou o valor de somar.
    }
}

calculadora.somar(9, 10);//executa o método
console.log(calculadora.numeros); // exibe resultado no console
calculadora.subtrair(1);
console.log(calculadora.numeros);