let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(4);
multiplyByTwo(2)


// this function curring is implemented by fundtion closer