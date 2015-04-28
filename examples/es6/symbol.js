const nombre = Symbol('nombre');
const honorifico = Symbol();

let persona = {};

persona[nombre] = 'Pepito';
persona[honorifico] = 'Don';

console.log(persona); // { Symbol(nombre): "Pepito", Symbol(): "Don" }
console.log(persona[nombre]); // 'Pepito'
console.log(persona[honorifico]); // 'Don'