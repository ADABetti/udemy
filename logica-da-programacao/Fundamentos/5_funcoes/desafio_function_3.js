// Criar um código que tire a médias das duas maiores notas do aluno e 
// imprima:
// aprovado >=7
// recuperação <=4
// reprovado <4


const nota1 = 1.8;
const nota2 = 3.1;
const nota3 = 2.7;

function calcularMinimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function calcularMedia(n1, n2, n3) {
    const menorNota = calcularMinimo(n1,(calcularMinimo(n2, n3)));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
            return (n2 + n1) / 2;
    }
}

function transformarConceito (calcularMedia){
    if (calcularMedia >= 7){
        return "Aprovado";
    } else if (calcularMedia >= 4){
        return "Em recuperação";
    } else {
        return "Reprovado";
    }
}

var mediaFinal = calcularMedia (nota1, nota2, nota3);
const statusFinal = transformarConceito (mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal}`);

status