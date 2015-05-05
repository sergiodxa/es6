// creamos un mapa de múltiples elementos iniciales
'use strict';

var map = new Map([[1, 'foo'], ['bar', 2], ['baz', 'baz']]);

var size = map.size; // obtenemos el tamaño del mapa
console.log(size);

// distintas formas de iterar un mapa
map.forEach(function (v) {
  console.log(v);
});

for (var _iterator = map.keys(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var key = _ref;

  console.log(key);
}

for (var _iterator2 = map.values(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
  var _ref2;

  if (_isArray2) {
    if (_i2 >= _iterator2.length) break;
    _ref2 = _iterator2[_i2++];
  } else {
    _i2 = _iterator2.next();
    if (_i2.done) break;
    _ref2 = _i2.value;
  }

  var value = _ref2;

  console.log(value);
}

for (var _iterator3 = map.entries(), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
  var _ref3;

  if (_isArray3) {
    if (_i3 >= _iterator3.length) break;
    _ref3 = _iterator3[_i3++];
  } else {
    _i3 = _iterator3.next();
    if (_i3.done) break;
    _ref3 = _i3.value;
  }

  var entrie = _ref3;

  console.log(entrie);
}

var keys = map.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

map.clear(); // lo vaciamos

size = map.size;
console.log(size);