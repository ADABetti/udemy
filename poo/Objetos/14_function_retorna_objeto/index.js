function criarUsuario(nome, cpf) {
    return {
        nome: nome,
        cpf: cpf,
        criarLogin: function () {
            console.log("seu login é: " + Math.floor((Math.random() * 1000000)));
        },
    }
}

let josias = criarUsuario("Joasias", 345345345);
console.log(josias);
console.log(josias.cpf);
josias.criarLogin();

//=========================================

function criarCarro(modelo, portas, aro, tetoSolar) {
    return {
        modelo: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro() {
            console.log("Carro ligou");
        },
        temTetoSolar() {
            if (tetoSolar == true) {
                console.log("Tem teto solar");
            } else {
                console.log("Não tem teto solar");
            }
        }
    }
}

let ferrari = criarCarro ("ferrari", 2, 20, true);
let combi = criarCarro ("combi", 3, 18, false);

console.log(ferrari.tetoSolar);
ferrari.ligarCarro();
