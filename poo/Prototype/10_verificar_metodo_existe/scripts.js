if (typeof Array.prototype.checklength !== "function") {
    Array.prototype.checklength = function () {
        return this.length;
    }
}

if (typeof Array.prototype.join !== "function") { //essa linha verifica se existe um outro método no js
    Array.prototype.join = function () {
        return this[0] + this[1]; // como o método join já existe, essa linha não procede.
    }
}



let a = [4, 6, 7, 8, 5, 4, 4, 5, 4, 55, 6, 5, 67, 6, 76, 76, 76, 76,];
console.log(a.checklength());
console.log(a.join());