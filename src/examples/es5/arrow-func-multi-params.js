"use strict";

var sumar = function sumar(x) {
  var y = arguments[1] === undefined ? 1 : arguments[1];
  return x + y;
};
console.log(sumar(1264, 751)); // 2015
console.log(sumar(3)); // 4