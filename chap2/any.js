"use strict";
// let val : any = 22;
// val = "string value";
// val = new Array();
// val.doesnotExits(33);
// console.log(val)
let val = 22;
val = "string value";
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
