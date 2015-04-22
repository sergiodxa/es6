class Persona{
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

let Pepito = new Persona('Pepito');
let Jose = new Persona('Jose');

console.log(Jose.saludar(Pepito)); // 'Hola Don Pepito'
console.log(Pepito.saludar(Jose)); // 'Hola Don Jose'