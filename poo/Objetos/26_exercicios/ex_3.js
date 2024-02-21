function Ninja(nome) {
    this.nome = nome;
    this.atirarShuriken = function () {
        console.log(this.nome + " atirou shuriken");
    }
}

let ninja1 = new Ninja("Naruto");
console.log(ninja1);
ninja1.atirarShuriken();