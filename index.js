function add (a, b) {
    return a + b;
}
add(3,4);
function subtract (a,b){
    return a - b;
}
subtract (4,3);
function multiply(a,b){
    return a * b;
}
multiply(3,3);
function divide (a,b){
    return a / b;
}
divide (100,10);

function increment(n){
    return (n += 1);
}
increment(2);

function makeInt(n) {
    return parseInt(n,10);
}

function decrement(n){
    return (n -=1);
}
makeInt("2.222");

function preserveDecimal(n) {
    return parseFloat(n,10);
}
preserveDecimal("2.222");