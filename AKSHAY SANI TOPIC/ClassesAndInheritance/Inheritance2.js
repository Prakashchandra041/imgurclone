
class Employee{
    constructor(x) {
        this.name=x
    }

    empInfo() {
        console.log(`Employe name is ${this.name}`);
    }
}

class Manager extends Employee{
   
    constructor(y) {
         super();
        console.log(`Manager name is ${y}`)
    }
}
let empObj = new Employee("Akash");
let managerObj=new Manager("Prakash")