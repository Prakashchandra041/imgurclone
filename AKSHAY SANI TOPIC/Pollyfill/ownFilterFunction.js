let arr = [1, 2, 3, 4, 5];

/*
let newArr = arr.filter((ele) => {
    return ele%2==0
});

console.log(newArr);
*/

Array.prototype.myOwnFitler = function (callback) {
    let newArray = [];
    for (let index=0; index < this.length; index++){
        if (callback(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

let newVal = arr.myOwnFitler((ele) => {
    return ele % 2 == 0;
})

console.log(newVal);