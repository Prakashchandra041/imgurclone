/*
using call apply and bind we can do Function BORROWING in javaScript.
we can brow function from other objects and use the data of other object.

in this HOF this argument is reference to object 
1- first take the funtion and then apply the method (call apply bind)
*/

let nameObj = {
  firstName: "Prakash",
  lastName: "Chandra",

  PrintFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

nameObj.PrintFullName()

let nameObj2 = {
  firstName: "Akash",
  lastName: "Chandra",
};
  
nameObj.PrintFullName.call(nameObj2);