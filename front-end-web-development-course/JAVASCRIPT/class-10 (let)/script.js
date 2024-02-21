for (let i = 0; i < 20; i++) {
    var div = document.createElement("div");
    div.onclick = function () {
        alert("Você clicou na caixa " + i);
    }
    document.getElementsByTagName('section')[0].appendChild(div)
}
