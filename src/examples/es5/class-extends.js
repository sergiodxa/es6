'use strict';

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var SerVivo = function SerVivo(tipo) {
  _classCallCheck(this, SerVivo);

  this.tipo = tipo;
};

var Animal = (function (_SerVivo) {
  function Animal(especie) {
    _classCallCheck(this, Animal);

    _SerVivo.call(this, 'animal');
    this.especie = especie;
  }

  _inherits(Animal, _SerVivo);

  return Animal;
})(SerVivo);

var Perro = (function (_Animal) {
  function Perro(raza) {
    _classCallCheck(this, Perro);

    _Animal.call(this, 'perro');
    this.raza = raza;
  }

  _inherits(Perro, _Animal);

  Perro.prototype.comer = function comer() {
    return 'comiendo';
  };

  return Perro;
})(Animal);

var Bulldog = (function (_Perro) {
  function Bulldog(nombre) {
    _classCallCheck(this, Bulldog);

    _Perro.call(this, 'Bulldog');
    this.nombre = nombre;
  }

  _inherits(Bulldog, _Perro);

  Bulldog.prototype.comer = function comer() {
    return '' + this.nombre + ' está ' + _Perro.prototype.comer.call(this);
  };

  return Bulldog;
})(Perro);

var Tronco = new Bulldog('Tronco');
console.log(Tronco.comer()); // Tronco está comiendo