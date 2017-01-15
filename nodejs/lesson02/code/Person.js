function Person(name, age) {
    this.name = name;
    this.age = age;
    this.alias = "Khung";
}

Person.prototype.myInfo = function () {
    console.log("My name: ", this.name);
    console.log("My age: ", this.age);
}

Person.prototype.oeoe = function() {
    console.log("OE OE!!");
}

module.exports = Person;