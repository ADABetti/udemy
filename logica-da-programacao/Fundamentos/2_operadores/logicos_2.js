var t1 = false;
var t2 = false;

var comprarTv50 = t1 && t2; // AND
console.log('Vamos comprar a tv50" \n' + comprarTv50); 

var comprarTv32 = t1 !== t2; // OU EXCLUSIVO
console.log('Vamos comprar a tv32" \n' + comprarTv32);

var tomarSorvete = t1 || t2; // OU
console.log('Vamos tomar sorvete?" \n' + tomarSorvete);

var ficarEmCasa = !tomarSorvete; // NOT (Negação lógica)
console.log('Vamos ficar em casa? \n' + ficarEmCasa); 
