var fs = require("fs");
var _ = require("underscore");
var lib = require("./lib.js");

console.log(__dirname);
console.log(__filename);

module.exports.abc = 123;
exports.cde = 456;

var content = fs.readFileSync("readme.txt");

console.log(content.toString());


var arrs = [
    1,
    3,
    5,
    6,
    8,
    10
];

var obj = [{
    name: "sv1",
    age: 19
}, {
    name: "sv2",
    age: 30
}, {
    name: "sv3",
    age: 24
}];

var result = _.filter(arrs, function (item) {
    return item >= 5;
});

var listSv = _.filter(obj, (item) => {
    return item.age < 25;
});

console.log(result);
console.log("list sv.age < 25: ", listSv);
console.log(lib);
console.log(fs);
console.log("END!!!");

