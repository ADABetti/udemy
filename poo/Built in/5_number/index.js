let a = 2;
let b = new Number (5);

console.log(a);
console.log(b);

let c = 13.833; // não é arredondamento, somente transforma em inteiro.
console.log(Number.parseInt(c));
console.log(parseInt(c));

//=================================================

console.log(Number);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//==================================================

let numero = 4.234567654;
console.log(numero.toFixed()); // sem casas depois da vírgula
console.log(numero.toFixed(2)); // 2 casas depois da vírgula
console.log(numero.toPrecision(2)); // considera os primeiros números e arredonda depois.
console.log(numero.toExponential());    