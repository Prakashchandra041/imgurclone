let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.MyOwnMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}


let  newval=arr.MyOwnMap((ele) => {
    return ele * 2;
})
console.log(newval);
// let newval = arr.map((ele,i,arr) => {
//     return arr
// })
// console.log(newval);