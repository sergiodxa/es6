let saludar = persona => {
  let { nombre, honorifico } = persona;
  let mensaje = `Hola ${honorifico} ${nombre}`;
  return mensaje;
}
console.log(saludar({ nombre: 'Pepito', honorifico: 'Don' }));