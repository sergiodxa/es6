
'use strict';function saludar(nombre){var honorifico=arguments[1]===undefined?'Don':arguments[1];return'Hola '+honorifico+' '+nombre;}
console.log(saludar('Pepito','Don'));console.log(saludar('Jose'));