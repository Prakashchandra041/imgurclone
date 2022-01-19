
class Employee{
    constructor(name) {
        console.log(`Constructor of Employee function : Employee Name :${name}`)
    }
}

class Manager extends Employee{
    constructor(x) {
        super()
        console.log(`Constructor of Manager function :  Manager Name ${x}`)
    }
}
let a = new Manager("Prakash");