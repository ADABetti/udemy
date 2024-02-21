function retornarInverso(valor){
    if (typeof valor == "boolean"){
       return !valor;
    } else if (typeof valor == "number"){
        return valor*(-1);
    } else {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`    }
}

console.log(retornarInverso(-200));