let persona = {
  nombre: 'Jose'
};

Object.observe(persona, changes => {
  changes.forEach(change => console.log(change));
});

persona.nombre = 'Pepito';
persona.honorifico = 'Don';
delete persona.nombre;