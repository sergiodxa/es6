'use strict';

var obj1 = {
  prop1: 'valor'
};
var obj2 = {
  prop2: 'otro valor'
};
var obj3 = {
  prop1: 'nuevo valor'
};

var obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4); // { prop1: 'nuevo valor', prop2: 'otro valor' }