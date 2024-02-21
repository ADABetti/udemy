function descreverCarro (marca:string, aro?:number) { //parâmetros opicionais vêm depois dos obrigatórios
    if(aro){
        console.log(`Carro é da marca ${marca} e aro é ${aro}`);
    } else {
        console.log(`Carro é da marca ${marca}`);
    }
}

descreverCarro ("fusca");
descreverCarro ("BMW", 18);