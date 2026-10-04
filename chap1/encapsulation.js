"use strict";
class Encapsulator {
    name;
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    constructor(name) {
        this.name = name;
    }
}
const encapsulator = new Encapsulator("John");
console.log(encapsulator.getName);
console.log(encapsulator.getName());
