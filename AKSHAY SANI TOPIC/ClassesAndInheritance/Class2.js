
/* function will be automatically call in browser
   constructor function ke andar hum log property do define karte hai

*/

class Student{
    constructor(name,age) {            // constructor method
        this.userName = name;
        this.Age = age;
    }

    message() {                         // protoType method
        console.log(`Student name is ${this.userName} and his is ${this.Age}`)
    }
    sorry() {
        console.log("sorry my dear friend");
    }
    
    static AnyMethodName() {            // static method -need not call object to call
        console.log("Message form static method in this we need to call form object")
    }
}

let a = new Student("Prakash", 28);     // here we are creating object and code is reusing again again 
let b = new Student("Akash", 27);      // here same code is using again again without creating
a.message();
b.message();
a.sorry();


Student.AnyMethodName()             // Here we need not create object to call the method we can directly 
                                    //use class name 
