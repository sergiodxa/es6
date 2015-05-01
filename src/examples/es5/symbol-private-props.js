'use strict';

var _Object$defineProperties;

var nombre = Symbol('nombre');

var obj = Object.defineProperties((_Object$defineProperties = {}, _Object$defineProperties[nombre] = 'Pepito', _Object$defineProperties), {
  nombre: {
    get: function () {
      return obj[nombre];
    },
    configurable: true,
    enumerable: true
  }
});

console.log(obj);
console.log(obj.nombre);
obj.nombre = 'Jose';