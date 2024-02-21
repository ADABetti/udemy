// Date.now conta os milisegundos desde 1970.

const futuro = Date.now() + 1000; // 1000 representa um segundo.
var quantidade = 0;

while(Date.now() < futuro){
    quantidade++
}

console.log("qtd.:" + quantidade);    
