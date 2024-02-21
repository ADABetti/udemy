let maquina = {
    equipamentos: ["cilindro", "motor", "castanha", "ferramenta"],
    tamanho: "pequena",
    nova: false,
    anosDeUso: 4,
}

console.log(maquina);
console.log(maquina.equipamentos[3]);
console.log(maquina.tamanho);
console.log(maquina["anosDeUso"]);

if (maquina.anosDeUso >= 5) {
    console.log("Máquina precisará de manutenção");
} else { 
    console.log("sem necessidade de manutenção");
}

for (let i = 0; i < maquina.equipamentos.length; i ++){
    console.log(maquina.equipamentos[i]);
}
