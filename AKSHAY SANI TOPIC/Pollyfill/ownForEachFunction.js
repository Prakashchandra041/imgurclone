let arr = [1, 2, 3, 4, 5];

/*
arr.forEach((ele,index,arr) => {
    console.log(ele,index,arr)
})
*/


Array.prototype.myOwnForeach = function (callback) {
    
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

arr.myOwnForeach((ele) => {
    console.log(ele);
})