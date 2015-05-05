// creamos un mapa de múltiples elementos iniciales
let map = new Map([
  [1, 'foo'],
  ['bar', 2],
  ['baz', 'baz']
]);

let size = map.size; // obtenemos el tamaño del mapa
console.log(size);

// distintas formas de iterar un mapa
map.forEach(v => {
  console.log(v);
});

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let entrie of map.entries()) {
  console.log(entrie);
}

let keys = map.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

map.clear(); // lo vaciamos

size = map.size;
console.log(size);