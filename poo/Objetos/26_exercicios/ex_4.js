function Ninja(nome, municao) {
    this.nome = nome;
    this.quantMunicao = municao,
        this.atirarShuriken = function () {
            if (this.quantMunicao > 0) {
                console.log(this.nome + " atirou uma vez");
                this.quantMunicao -= 1;
            } else {
                console.log(this.nome + " não tem mais munição");
            }
        }
}

let ninja1 = new Ninja("Naruto", 3);
console.log(ninja1);
ninja1.atirarShuriken(); // menos uma munição (3)
ninja1.atirarShuriken(); // menos uma munição (2)
ninja1.atirarShuriken(); // menos uma munição (1)
ninja1.atirarShuriken(); // Não há mais munição