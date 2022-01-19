let arr = ["prkash", "Akash"];
 
let object = {
    name: "Akshay",
    city: "Dehradun",
    getIntro: function () {
        console.log(this.name + "from" + this.city);
    }
}


let object2 = {
    name:"Aditya"
}



object2.__proto__ = object;
// by this we can acess the properties and method of object inside
// object2
// you can it in your browser by object2.city;
// or by typing object2.__proto__  it will contain all the properties of object;



// here object2 is inheritance the property of object





let newarr = [1, 3];

Array.prototype.doubleLen = function () {
  console.log("double length ");
};