let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
let obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
console.log(arr1 === arr2) // compare two different memory address;


