// objeto data
// atributos: dia, mês e ano;
//método exibir -> "dia/mes/ano".

const data = {
    dia: 23,
    mes: 12,
    ano: 1900,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

console.log(data.exibir());