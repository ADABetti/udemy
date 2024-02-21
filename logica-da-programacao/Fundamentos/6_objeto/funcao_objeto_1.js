function data(dia, mes, ano) {
    return {
        dia, // não é necessário duplicar a chave e o valor.
        mes,
        ano,
        exibir(){ // o método exibir pode ser usado dessa forma:
            return `${this.dia}/${this.mes}/${this.ano}`; 
        }
    }
}

const d1 = data (1, 1, 1901);
const d2 = data (2, 2, 2002);
const d3 = data (3, 3, 3003);


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());