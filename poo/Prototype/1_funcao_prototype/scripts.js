function test() {
    console.log("teste");
}

test();

console.log(test.prototype);
console.log(typeof test.prototype);

test.prototype.teste = 1;
console.log(test.prototype);