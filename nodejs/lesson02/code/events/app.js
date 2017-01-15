var pointMaker = require("./PointMaker");
var abc = require("./PointMaker");
var cde = require("./PointMaker");

var bangDiem = [
    {
        mssv: "sv001",
        point: 6
    },
    {
        mssv: "sv002",
        point: 4
    },
    {
        mssv: "sv003",
        point: 3
    }
];

pointMaker.on("badScore", diem => {
    console.log("Diem thap !!! ", diem.point);
    console.log("Gui thong bao den sv: ", diem.mssv);
});

pointMaker.on("pass", diem => {
    console.log("Vao so diem: ", diem);
});

// dua vao chuong trinh cham diem
pointMaker.checkPoint(bangDiem);
// abc.checkPoint(bangDiem);
// cde.checkPoint(bangDiem);

