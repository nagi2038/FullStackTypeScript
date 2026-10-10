"use strict";
class ClassA {
    static typeName;
    constructor() { }
    static getFullName() {
        return "ClassA " + ClassA.typeName;
    }
}
const a = new ClassA();
console.log(ClassA.typeName);
