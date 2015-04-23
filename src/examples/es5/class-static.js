"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var calculadora = (function () {
  function calculadora() {
    _classCallCheck(this, calculadora);
  }

  calculadora.sumar = function sumar() {
    for (var _len = arguments.length, numeros = Array(_len), _key = 0; _key < _len; _key++) {
      numeros[_key] = arguments[_key];
    }

    var resultado = 0;

    numeros.forEach(function (numero) {
      resultado += numero;
    });

    return resultado;
  };

  return calculadora;
})();

console.log(calculadora.sumar(1, 2, 3)); // 6