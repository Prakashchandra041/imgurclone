/*
 WHEN A FUNCTION,INSTEAD OF TAKIN ALL ARGUMENTS AT ONE TIME, TAKES THE FIRST ONE AND 
 RETURN A NEW FUNCTION THAT TAKES THE SECOND ONE AND RETURN A NEW FUNCTION
*/


//  Normal Function
/*
function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(1, 2, 3));

*/


// curring function;

function sum(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        }
    }
}


console.log(sum(1)(2)(3));
