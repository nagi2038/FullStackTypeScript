"use strict";
var A;
(function (A) {
    class FirstClass {
    }
    A.FirstClass = FirstClass;
})(A || (A = {}));
var B;
(function (B) {
    class SecondClass {
    }
    const test = new A.FirstClass();
})(B || (B = {}));
