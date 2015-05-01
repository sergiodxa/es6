'use strict';

var _persona;

var nombre = Symbol('nombre');
var honorifico = Symbol();

var persona = (_persona = {}, _persona[nombre] = 'Pepito', _persona[honorifico] = 'Don', _persona);

console.log(persona); // { Symbol(nombre): "Pepito", Symbol(): "Don" }
console.log(persona[nombre]); // 'Pepito'
console.log(persona[honorifico]); // 'Don'