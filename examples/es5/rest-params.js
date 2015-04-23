
"use strict";function sumar(a,b){for(var _len=arguments.length,c=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){c[_key-2]=arguments[_key];}
var resultado=a+b;c.forEach(function(n){resultado+=n;});return resultado;}
console.log(sumar(1,2));console.log(sumar(1,2,3));console.log(sumar(1,2,3,4));console.log(sumar(1,2,3,4,5));