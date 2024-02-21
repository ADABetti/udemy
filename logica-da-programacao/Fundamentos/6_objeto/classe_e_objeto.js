class Data { // função
    dia = 1;
    mes = 1;
    ano = 2021;

    constructor(d, m , a){
        this.dia = d;
        this.mes = m;
        this.ano = a;
    }
}

const d1 = new Data ();
d1.dia = 30;
d1.mes = 04;
d1.ano = 1995;
console.log(d1);