'use strict';

var obj1 = { nombre: 'valor' };
var obj2 = { nombre: 'valor' };

console.log(Object.is(obj1, obj1)); // true
console.log(Object.is(obj1, obj2)); // false