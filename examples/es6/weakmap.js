let wMap = new WeakMap();

let obj = { first: 'value' }

wMap.set(obj, 'mundo');

console.log(wMap.get(obj));

if (wMap.has(obj)) {
  wMap.delete(obj);

  console.log(wMap.get(obj));
}