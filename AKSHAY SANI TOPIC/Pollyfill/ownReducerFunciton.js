let arr = [1, 2, 3, 4, 5, 6];
/*
let result = arr.reduce((acc, cur,i,arr) => {
    acc += cur;
    return acc;
}, 0);
console.log(result);
*/

Array.prototype.OwnFilter = function (callback, initialValue) {
    let accumulater = initialValue;
    for (let index = 0; index < this.length; index++){
        accumulater = callback(accumulater, this[index], index, this);
    }
    return accumulater;
}

let sumVal = arr.OwnFilter((acc, cur) => {
    acc += cur;
    return acc;
}, 0);

console.log(sumVal);
