let map = new Map();
let persona;

map.set('persona', { nombre: 'Jose' }); // guardamos el valor

// comprobamos que exista dentro de nuestro map
if (map.has('persona')) {
  persona = map.get('persona'); // lo obtenemos
}

map.delete('persona'); // borramos 'persona' y el valor asociado

console.log(persona);
console.log(map.get('persona'));