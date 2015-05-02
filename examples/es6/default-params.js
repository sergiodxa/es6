function saludar (nombre, honorifico = 'Don') {
  return `Hola ${honorifico} ${nombre}`;
}
console.log(saludar('Pepito', 'Don'));
console.log(saludar('Jose'));