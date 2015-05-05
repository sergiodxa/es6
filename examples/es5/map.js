
'use strict';var map=new Map();var persona=undefined;map.set('persona',{nombre:'Jose'});if(map.has('persona')){persona=map.get('persona');}
map['delete']('persona');console.log(persona);console.log(map.get('persona'));