class Employe{
    constructor() {
       this.name = "Akash";
       this.age = 25;
    }

    info() {
        console.log(`${this.name} age is ${this.age} `);
    }
}

class Manger extends Employe{
    constructor(y) {
        super()
        console.log(`Manger name is ${y}`)
    }
}

let managerObj = new Manger("Prakash");
managerObj.info();

