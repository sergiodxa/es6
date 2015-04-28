'use strict';

Symbol['for']('nombre');

var persona = {};

persona[Symbol['for']('nombre')] = 'Jose';

console.log(persona); // { Symbol('nombre'): 'Jose' }