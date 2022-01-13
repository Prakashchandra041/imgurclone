// piramid
// let n = 5;
// for (let i = 0; i < n; i++){
//     let res = "";
//     for (let j = n; j > i; j--){
//         res += " ";
//     }
//     for (let k = 0; k < i; k++){
//         res += "* ";
//     }
//     console.log(res);
// }

// reverse piramid
let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let k = 0; k < i; k++) {
    res += " ";
  }
  for (let j = n; j > i; j--) {
    res += "* ";
  }
  console.log(res);
}
