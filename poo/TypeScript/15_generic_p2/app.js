function identidade(arg) {
    console.log(typeof arg);
    return "este resultado final é: " + arg.toString();
}
console.log(identidade("texto"));
console.log(identidade(5));
console.log(identidade(true));
