const nombre = Symbol('nombre');
const honorifico = Symbol();

let persona = {
  [nombre]: 'Pepito',
  [honorifico]: 'Don'
};

console.log(persona);
console.log(persona[nombre]);
console.log(persona[honorifico]);