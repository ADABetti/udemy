const numeros = [3, 4, 5, 6, 4];

numeros.push(6);
console.log(numeros);

numeros[0] = 100;
console.log(numeros);

console.log(numeros.join());
console.log(numeros.join("-"));
console.log(numeros.join("..."));

const numeros2 = numeros.concat(678, 234, 12);
console.log(numeros);
console.log(numeros2);

console.log(numeros.indexOf(4)); // busca o índice do elemento indicadao em ().
console.log(numeros.indexOf(4,2)); // vai buscar o elemento 4, a partir do índice 2.