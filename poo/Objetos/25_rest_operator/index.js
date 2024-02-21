let array = [3,4,5,3,2,2,2,3,4,4,5,45,4,5,45,3,3,4,34,3,3,2,3,4,3,4,3,4,3,2,3,4,3,4,34,2,3,4,23,4,23,4,3,42,3,4,45,6,56,56,56,5,4,];

let [a, b, c, ...d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(array.length);