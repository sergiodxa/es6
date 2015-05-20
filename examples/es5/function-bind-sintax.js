
"use strict";var _context;var map=Array.prototype.map;var filter=Array.prototype.filter;function mostrar(){console.log(this);return this;}
function agregar(numeros){for(var _iterator=numeros,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}
var numero=_ref;this.push(numero);}
return this;}
var data=[1,2,3];(_context=(_context=(_context=(_context=(_context=(_context=mostrar.call(data),filter).call(_context,function(x){return x%2!==0;}),mostrar).call(_context),map).call(_context,function(x){return++x;}),mostrar).call(_context),agregar).call(_context,data),mostrar).call(_context);