function retornarUmaFuncao () {
    return function (){ //função anônima
        return function (){ //função anônima
            return "BOM DIA";
        }
    }
}

console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao()()());