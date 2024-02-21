// trocar valores das variáveis.

var a = 7;
var b = 94;
var temp = a; // a = 7

a = b; // a = 94
b = temp; // b = 7 -> Ver linha 5.
console.log(a);
console.log(b);

// Outra forma de mudar valores:
[a,b] = [b,a];
console.log(a);
console.log(b);

