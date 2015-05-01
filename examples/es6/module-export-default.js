class Persona {
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre     = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

export default Persona;