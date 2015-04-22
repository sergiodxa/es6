let pepito = {
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}
console.log(pepito.saludar({ nombre:'Jose', honorifico:'Don' })); // 'Hola Don Jose'