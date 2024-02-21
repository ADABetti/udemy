const notas = [7,8,3,5,6,4];
var valores = "";

for (var nota of notas){
    console.log(nota);
}


for (var nota of notas){ // se usar of, você acessa os valores
    valores += nota + " ";
}
console.log(valores);

var indices = "";
for (var indice in notas){ // se usar in, você acessa os índices.
indices += indice + " ";
}
console.log(indices);
    