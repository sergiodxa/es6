let persona = {
  nombre: 'Jose'
};

Object.observe(persona, changes => {
  changes.forEach(change => console.log(change));
});

persona.nombre = 'Pepito';
// { type: 'update', object: { honorifico: 'Don' }, name: 'nombre', oldValue: 'Jose' }
persona.honorifico = 'Don';
// { type: 'add', object: { honorifico: 'Don' }, name: 'honorifico' }
delete persona.nombre;
// { type: 'delete', object: { honorifico: 'Don' }, name: 'nombre', oldValue: 'Pepito' }