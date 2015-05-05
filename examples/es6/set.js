let persona = { nombre: 'Pepito' };

let set = new Set([1, 'foo', 3.14, persona]);

console.log(set.size);

console.log(set.has(1));

set.add('bar');

set.delete(persona);

set.forEach(v => console.log(v));

for (let values of set) {
  console.log(values);
}

let values = set.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());