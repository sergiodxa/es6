'use strict';

var wMap = new WeakMap();

var obj = { first: 'value' };

wMap.set(obj, 'mundo');

console.log(wMap.get(obj));

if (wMap.has(obj)) {
  wMap['delete'](obj);

  console.log(wMap.get(obj));
}