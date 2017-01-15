var Student = require("./Student");


var sv1 = new Student("Nam", 22, "sv001");
sv1.myInfo();
// sv1.oeoe();

console.log("My mssv: ", sv1.mssv);

// change mssv
sv1.mssv = "sv002";

sv1.myInfo();
console.log("My mssv: ", sv1.mssv);
