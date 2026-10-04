"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const jill = { name: "jill" };
const person = jill;
console.log(person);
