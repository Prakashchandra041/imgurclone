
let arr = [1, 2, 3, 4, 5];
// Map(ele,index,arr)


Array.prototype.myOwnMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(callback(this[i],i,this))
    }
    return newArr
}


let newa = arr.myOwnMap((ele) => {
    return ele * 2;
})
console.log(newa);
