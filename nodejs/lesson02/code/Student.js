var Person = require("./Person");

function Student(name, age, mssv) {
    Person.call(this, name, age);
    this.mssv = mssv;
}

Student.prototype = new Person();

Student.prototype.sayHello = function() {
    console.log("Hello");
}

Student.prototype.myInfo = function() {
    console.log("My name: ", this.name);
    console.log("My age: ", this.age);
    console.log("My mssv: ", this.mssv);
}

module.exports = Student;