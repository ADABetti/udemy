var Barco;
(function (Barco) {
    Barco[Barco["Motor"] = 1] = "Motor";
    Barco[Barco["Proa"] = 1] = "Proa";
    Barco[Barco["Popa"] = 1] = "Popa";
})(Barco || (Barco = {}));
; //valores não podem ser alterados, só são aceitos números.
var numeroDeMotores = Barco.Motor;
console.log(numeroDeMotores);
console.log(Barco);
