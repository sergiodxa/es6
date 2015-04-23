'use strict';

function saludar(nombre) {
  var honorifico = arguments[1] === undefined ? 'Don' : arguments[1];

  return 'Hola ' + honorifico + ' ' + nombre;
}
console.log(saludar('Pepito', 'Don')); // 'Hola Don Pepito'
console.log(saludar('Jose')); // 'Hola Don Jose'