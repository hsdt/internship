var Person = require("./Person");
var Student = require("./Student");

var sv1 = new Student("cong", 19, 465);

sv1.sayHello();
sv1.myInfo();

var sv2 = new Student("Hien", 18, 12345);
sv2.sayHello();
sv2.myInfo();

var p1 = new Person("Tien", 21);
p1.myInfo();

sv1.oeoe();
