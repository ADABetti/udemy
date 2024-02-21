const cliente = {
    codigo: 6780, // number
    nome: "Ana", // string
    vip: true, // boolean
    endereco: { // objeto
        rua: "Tasmânia",
        numero: 456,
        complemento: "Apto 1, bl.03",
        pontosRef: ["shopping", "hospital"], //array
    }
}

console.log(cliente["endereco"]["rua"]);
console.log(cliente.endereco.rua);
console.log(cliente.endereco.pontosRef[0]);
