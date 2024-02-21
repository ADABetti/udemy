function Ninja(nome, municao) {
    this.nome = nome;
    this.quantMunicao = municao,
        this.atirarShuriken = function (inimigo) {
            if (this.quantMunicao > 0) {
                console.log(this.nome + " atirou uma vez");
                this.quantMunicao -= 1;
                inimigo.vivo = false;
            } else {
                console.log(this.nome + " não tem mais munição");
            }
        }
}

function Inimigo(nome, vivo) {
    this.nome = nome;
    this.vivo = vivo;

}

let ninja1 = new Ninja("Naruto", 3);
let vilao = new Inimigo("Joker", true);

function verificarPai(variavel, obj) {
    return console.log(variavel instanceof obj);
}

verificarPai (ninja1, Ninja);
verificarPai (vilao, Ninja);
verificarPai (vilao, Inimigo);