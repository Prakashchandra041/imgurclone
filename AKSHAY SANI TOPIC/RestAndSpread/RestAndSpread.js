function example(a, b, ...rest) {
  console.log(rest);
}

example(1, 2, 3, 5, 6, 7, 8);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
let arr3 = [...arr1, ...arr2];

console.log(arr3);
