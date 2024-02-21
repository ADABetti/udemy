let teste = {
    nome: "Lucas",
}

let teste2 = {
    nome: "Lucas",
}

console.log(Object.is(teste, teste2)); // output false

let teste3 = teste;
console.log(Object.is(teste3, teste)); // output true

console.log(Object.is(NaN, NaN)); // output true
console.log(NaN === NaN); // output false

console.log(Object.is(+0, -0)); // output false
console.log(+0 === -0); // output true