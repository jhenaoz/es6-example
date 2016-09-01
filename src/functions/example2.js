"use strict";
function sumar(a, b = a) {
  return a+b;
}

console.log(sumar(2,5));
console.log(sumar(5));
