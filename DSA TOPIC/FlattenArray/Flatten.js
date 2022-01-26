let ary = [1, 2, [3, 4], [5, 6, [7, 8]]];
// trick -1
// let result = arr.flat(Infinity);
// console.log(result);



 //trick -2
const flatten = (ary) =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

console.log(flatten(ary));

// trick- 3;

const data = [[1, 2, 3], [4, 5], [2]];
let res = [];
data.forEach((curSet) => {
  res = [...res, ...curSet];
});
console.log(res);

//trick-4
let arr = [1, 2, [3, 4], [5, 6, [7, 8]]];
let flatArray = [].concat.apply([], arr);
console.log(flatArray);
