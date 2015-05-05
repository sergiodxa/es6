let wSet = new WeakSet();

let obj = { first: 'value' };

wSet.add(obj);

if (wSet.has(obj)) {
  wSet.delete(obj);
}