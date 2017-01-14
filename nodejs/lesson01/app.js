var fs = require("fs");

var fileName = "readme.txt";

fs.readFile(fileName, "utf8", function(err, data){
	if (err) {
		console.error("ERROR, Loi doc file: ", err);
	} else {
		console.info("Data: ", data);
	}
	
});

var content = fs.readFile("abc.txt", "ascii", (err, content) => {
	// nhớ check lỗi
	console.log("1. " + content);

});

var abcstr = fs.readFileSync("abc.txt");

console.log("2. " + content);
console.log("3. " + abcstr);

/** Kết quả: Man 1 ???? */
// Hello world ....
// abc content
// 2. abc content

/*** thay đổi: Man 2 */
// Hello world ....
// abc content
// 2. 1. abc content