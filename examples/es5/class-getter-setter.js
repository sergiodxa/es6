'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Persona = (function () {
  function Persona(nombre) {
    _classCallCheck(this, Persona);

    this._nombre = nombre;
  }

  _createClass(Persona, [{
    key: 'nombre',
    get: function () {
      return this._nombre;
    },
    set: function (nuevo) {
      this._nombre = nuevo;
    }
  }]);

  return Persona;
})();

var Pepito = new Persona('Pepito');
console.log(Pepito.nombre); // 'Pepito'
Pepito.nombre = 'Don Pepito';
console.log(Pepito.nombre); // 'Don Pepito'