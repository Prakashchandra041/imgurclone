
class ClassName{
    constructor(x,y) {
        this.name = x;
        this.age = y;
        console.log(`This message is from constructor`);
    }

    message() {
        console.log(`My name is ${this.name}and my age is ${this.age}`);
    }

    static MethodName() {
        console.log(`this is static method  insie class`)
    }


}

let newobj = new ClassName("Prakash", 28);
newobj.message();
ClassName.MethodName();
