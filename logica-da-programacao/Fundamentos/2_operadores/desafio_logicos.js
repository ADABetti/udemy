// duas operações resultar em TRUE (Aritmeticos, relacionais, lógicos);

var verdadeira1 = 3 + 3 > 4 && 8 * 1 > 3;
var verdadeira2 = 7 !== 7 || 9 > 3;

console.log(verdadeira1);
console.log(verdadeira2);


// duas operações resultar em FALSE (Aritmeticos, relacionais, lógicos);

var falsa1 = 4 + 1 < 3 || false || 15 === "15";
var falsa2 = 7 !== 7 || 3 != "3";

console.log(falsa1);
console.log (falsa2);