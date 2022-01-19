let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrNew=arr.map((el) => el * 2);
// let arrNew=arr.filter((el)=>el%2==0)
// let arrNewValue= arr.reduce((acc,curr) => {
//     acc = acc + curr;
//     return acc
// },0)
// console.log("arrNewValue", arrNewValue);


// let cirArea = arr.map((el) => {
//    return 3.14*el**2
// })

// console.log(cirArea);

// let val = 5;
// let newval = val.toString(2);
// console.log(newval);

let maxVal = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, -99);
console.log(maxVal);