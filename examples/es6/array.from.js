let arr1 = [1,2,3];
let arr2 = Array.from(arr1, v => --v; );
arr2.push(3);
console.log(arr1);
console.log(arr2);