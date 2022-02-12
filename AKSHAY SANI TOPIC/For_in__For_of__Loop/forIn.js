let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
/*
difference between for in loop and for of loop
for in loop is used majorly used to iterate over object;
whereas for of loop is used for iterating over array element;
*/

for (let key in obj) {
    console.log("key", key, "value", obj[key]);
}


let name = ["Praksh", "Akash", "Vikram", "Subham", "Nitish", "Sagar", "Sudipta", "Manish", "Chanchal"];

for (const i of name) {
    console.log(i);
}