let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.reduce((acc,crr) => {
//     acc += crr;
//     return acc;
// }, 0)
// console.log(newArr);





Array.prototype.MyMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(this[i], i, this);
    }
    return newArr;
}

Array.prototype.MyForEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i],i,this)
    }
}

Array.prototype.MyReduce = function (callback,initialValue) {
    let accumlater = initialValue;
    for (let i = 0; i < this.length; i++){
        accumlater = callback(accumlater,this[i], i, this);
    }
    return accumlater;
}

let val = arr.MyReduce((acc,curr) => {
    acc += curr
    return acc;
    
}, 0)

console.log(val);