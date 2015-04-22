// Cargando un solo módulo
System.import('modulo')
  .then(modulo => {
    // código
  })
  .catch(error => {
    // código
  });

// Cargando múltiples módulos
Promise
  .all(['modulo1', 'modulo2', 'modulo3'].map(x => System.import(x)))
  .then(([modulo1, modulo2, modulo3]) => {
    // código
  })
  .catch(error => {
    // código
  });