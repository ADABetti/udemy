interface config {
    marca: string, //parametro obrigatório
    aro?: number,  //? indica parâmetro opicional
    tetoSolar: boolean,
    cor?:string
}

function criarCarro (config: config): {marca:string, aro:number, tetoSolar:boolean, cor:string} {
let carro = {marca: "Default", aro:16, tetoSolar: false, cor:"preto"};

if(config.marca){
    carro.marca = config.marca;
}

if(config.aro){
    carro.aro = config.aro;
}

if(config.tetoSolar){
    carro.tetoSolar = config.tetoSolar;
}

if(config.cor){
    carro.cor = config.cor;
}

    return carro;
}

let fusca = criarCarro({marca:"Fusca", tetoSolar:false});
console.log(fusca);