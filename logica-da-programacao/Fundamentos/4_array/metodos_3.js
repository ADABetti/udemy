const notas = [56, 76, 87, 98];

notas.forEach(element => {
    console.log(element);
});

//============================

function paraCadaElemento (elemento, indice, array){
    console.log(elemento, indice, array);
}

notas.forEach(paraCadaElemento); // função como parâmetro 