Array.prototype.checklength = function () {
    return this.length;
}

Array.prototype.somarDoisPrimeiros = function () {
    return this[0] + this[1];
}

let a = [4, 6, 7, 8, 5, 4, 4, 5, 4, 55, 6, 5, 67, 6, 76, 76, 76, 76,];
console.log(a.checklength());
console.log(a.somarDoisPrimeiros());