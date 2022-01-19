// let arr = [];
// let n = 5;
// function abc(arr,n) {
//     if (n == 0) {
//         return arr;
//     }
    
//     abc(arr.push(n),n-1);
// }

// console.log(abc(arr, n));



let arr = [];
let n = 5;

function abc(arr, n) {
  if (n == 0) {
    return arr;
  }

  abc(arr.push(n), n - 1);
}

console.log(abc(arr, n));