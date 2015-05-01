let obj1 = {
  prop1: 'valor'
};
let obj2 = {
  prop2: 'otro valor'
};
let obj3 = {
  prop1: 'nuevo valor'
};

let obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);