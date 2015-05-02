let obj1 = { nombre: 'valor' }
let obj2 = { nombre: 'valor' };

console.log(Object.is(obj1, obj1));
console.log(Object.is(obj1, obj2));