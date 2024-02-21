function identidade(arg) {
    console.log(typeof arg);
    return arg;
}
console.log(identidade("string"));
console.log(identidade(5));
console.log(identidade(true));
