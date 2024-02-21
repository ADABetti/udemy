function retornarFuncao (){
    
    function bomDia(){
        return "Bom dia";
    }

    return bomDia;
}

console.log(retornarFuncao);
console.log(retornarFuncao());
console.log(retornarFuncao()());