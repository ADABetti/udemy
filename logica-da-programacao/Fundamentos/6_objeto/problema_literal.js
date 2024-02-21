// muitas linhas de código sobre a mesma coisa

const data1 = {
    dia: 01,
    mes: 01,
    ano: 1901,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
const data2 = {
    dia: 02,
    mes: 02,
    ano: 2002,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
const data3 = {
    dia: 03,
    mes: 03,
    ano: 3003,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());