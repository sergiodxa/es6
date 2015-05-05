'use strict';

var persona = { nombre: 'Pepito' };

var set = new Set([1, 'foo', 3.14, persona]);

console.log(set.size);

console.log(set.has(1));

set.add('bar');

set['delete'](persona);

set.forEach(function (v) {
  return console.log(v);
});

for (var _iterator = set, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var _values = _ref;

  console.log(_values);
}

var values = set.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());