function calcularSalarioLiquido (horas,salario){
    const salarioBruto = salario * horas;
    const imposto = salarioBruto * (0.30);
    const salarioLiquido = salarioBruto - imposto;
    return `salário líquido é igual R$${salarioLiquido}`;
}

console.log(calcularSalarioLiquido(180,60));