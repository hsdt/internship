var events = require("events");
var EventEmitter = events.EventEmitter;


class PointMaker extends EventEmitter {

    constructor() {
        super();
    }

    /**
     * bangdiem: [{ mssv, point}]
     */
    checkPoint(bangdiem) {

        for(let diem of bangdiem) {
            
            if (diem.point < 5) {
                // thong bao
                this.emit("badScore", diem);
            } else {
                // dat
                this.emit("pass", diem);
            }
        }
        
        console.log("checkPoint done");
    }

}

module.exports = new PointMaker();
console.log("I AM HERE !!!!!!!!!!!!!!!!!!!");

