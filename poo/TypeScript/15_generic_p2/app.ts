function identidade <T>(arg:T): string{
    console.log(typeof arg);
    return "este resultado final é: " + arg.toString();
}

console.log(identidade<string>("texto"));
console.log(identidade<number>(5));
console.log(identidade<boolean>(true));
