// verifica padrões na string

let palavra = new RegExp (/ar/);

console.log(palavra.test("armario"))
console.log(palavra.test("lavoro"))
console.log(palavra.test("cachorro"))
console.log(palavra.test("pata"))