var a = 5;
var b = "5";
var c = 6;

// The output is "igual" because it's not considering the datatype.
if (a != b) {
    console.log("diferente")
} else {
    console.log("igual")
} 

// The output is "diferente" because it's  considering the datatype.
if (a !== b) {
    console.log("diferente")
} else {
    console.log("igual")
} 
