let obj1 = { nombre: 'valor' }
let obj2 = { nombre: 'valor' };

console.log(Object.is(obj1, obj1)); // true
console.log(Object.is(obj1, obj2)); // false