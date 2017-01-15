const Person = require("./Person");

class Student extends Person {

    constructor(name, age, mssv) {
        super(name, age);

        this._mssv = mssv;
    }

    get mssv() {
        return this._mssv;
    }

    // set mssv(value) {
    //     this._mssv = value + "__1";
    // }

    myInfo() {
        console.log("My name: ", this.name);
        console.log("My age: ", this.age);
    }

    sayHello() {
        console.log("Hello !");
    }

}

module.exports = Student;