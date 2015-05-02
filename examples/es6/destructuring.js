// objetos
let persona = {
  nombre: 'Jose',
  honorifico: 'Don'
};

let { nombre, honorifico: titulo } = persona;
console.log(nombre);
console.log(titulo);

// arrays
let fecha    = [24, 4, 2015];
let [d, , y] = fecha;
console.log(d);
console.log(y);