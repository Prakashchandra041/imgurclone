let arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6];

let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  }
}
// console.log(Object.keys(obj));

let uniqueArr = arr.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(Object.keys(uniqueArr));
