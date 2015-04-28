Symbol.for('nombre'); // crea un nuevo símbolo

let persona = {};

// usa el symbolo 'nombre' para identificar a una propiedad de persona
persona[Symbol.for('nombre')] = 'Jose';

console.log(persona); // { Symbol('nombre'): 'Jose' }