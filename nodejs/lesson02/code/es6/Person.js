class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    myInfo() {
        console.log("My name: ", this.name);
        console.log("My age: ", this.age);
    }

    oeoe() {
        console.log("OE OE !!");
    }
}

module.exports = Person;


