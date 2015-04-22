let arr = ['foo','bar','baz'];

let eArr = arr.entries();

console.log(eArr.next()); // { value: [0,'foo'], done: false }
console.log(eArr.next()); // { value: [1,'bar'], done: false }
console.log(eArr.next()); // { value: [2,'baz'], done: false }
console.log(eArr.next()); // { value: undefined, done: true }