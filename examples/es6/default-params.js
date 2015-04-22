function saludar (nombre, honorifico = 'Don') {
  return `Hola ${honorifico} ${nombre}`;
}
console.log(saludar('Pepito', 'Don')); // 'Hola Don Pepito'
console.log(saludar('Jose')); // 'Hola Don Jose'