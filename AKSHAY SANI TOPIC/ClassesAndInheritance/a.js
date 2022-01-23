class Employee{
    constructor() {
        this.name = "Akash";
        this.age = 27;
    }

    info() {
        console.log("fullName", this.name, this.age);
    }
}

class Manager extends Employee{
    constructor(x) {
        super()
       console.log("Manger name is ",x)
    }
}


let empobj = new Employee();
let managerObj = new Manager("Prkash");
managerObj.info();