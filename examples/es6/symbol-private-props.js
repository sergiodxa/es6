const nombre  = Symbol('nombre');

const persona = {
  [nombre]: 'Pepito',
  get nombre() { return persona[nombre] }
};

console.log(persona.nombre); // permite el acceso al nombre de persona
persona.nombre = 'Jose'; // da error al querer cambiarlo