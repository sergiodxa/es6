'use strict';

var nombre = Symbol('nombre');
var honorifico = Symbol();

var persona = {};

persona[nombre] = 'Pepito';
persona[honorifico] = 'Don';

console.log(persona); // {}
console.log(persona[nombre]); // 'Pepito'
console.log(persona[honorifico]); // 'Don'