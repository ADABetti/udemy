const produto = {
    nome: "Ipad",
    preco: 1000,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto);
    }
    // nome, preco e desconto são atributos ou propriedades.
}

console.log(produto.precoComDesconto());