// objetos
let persona = {
  nombre: 'Jose',
  honorifico: 'Don'
};

let { nombre, honorifico: titulo } = persona;
console.log(nombre); // 'Jose'
console.log(titulo); // 'Don'

// arrays
let fecha     = [24, 4, 2015];
let [d, , y] = fecha;
console.log(d); // 24
console.log(y); // 2015