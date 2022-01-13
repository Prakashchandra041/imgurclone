//here we are creating object using constructer function
//by the help of this and new key 




function Person(p, c) {
    this.name = p,
    this.Lname=c
} 
// here we learn about inheritance;

Person.prototype.age = "Mumbai";

let personOneObj = new Person("Prakash", "Chandra");

let perosnTwoObj = new Person("Akash", "Chandra");
console.log(perosnTwoObj.age);
console.log(personOneObj);




//here we will learn protype and inherritnace
// creating object from protype and inheritance , and by object;
// let obj = {
//     name:"abc"
// }

// let obj2 = Object.create(obj);
// console.log(obj2);
// console.log(obj2.__proto__);
// console.log(obj2.name);