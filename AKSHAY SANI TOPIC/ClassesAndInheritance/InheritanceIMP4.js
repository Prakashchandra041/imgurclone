class Employee{
    constructor(x,y,z) {
        this.name = x;
        this.age = y;
        this.salary = z;

        console.log("this is Employe constructor");
    }

    info() {
        console.log(`Employe name: ${this.name}, Age:${this.age} and his slaray ${this.salary}`);
    }
}


class Manager extends Employee{
    constructor() {
        super()
        console.log('this is Manager constructor');
    }
    
    info() {
        
        let ta = 1000;
        let pa = 3000;
        let totalSalary = this.salary + ta + pa;
        console.log(`Manager name: ${this.name}, Age:${this.age} and his slaray ${totalSalary}`);
    }
}

let managerObj = new Manager("Prakash", 28, 80000);
managerObj.info();