"use strict";
class Person {
    constructor() { }
    msg = "";
    speak() {
        console.log(this.msg);
    }
}
const tom = new Person();
tom.msg = "hello";
tom.speak();
class PersonPrivate {
    msg;
    constructor(msg) {
        this.msg = msg;
    } // CONVER BOTH DECLARATION AND INITLIZATION
    speak() {
        console.log(this.msg);
    }
}
const pp = new PersonPrivate("hello");
// tom.msg = "hello";
pp.speak();
class PersonPrivateVerbose {
    msg;
    constructor(msg) {
        this.msg = msg;
    }
    speak() {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}
const ppv = new PersonPrivateVerbose("hello");
// tom.msg = "hello";
ppv.speak();
class PersonPrivateReadonly {
    msg;
    constructor(msg) {
        this.msg = msg;
    } // PRIVATE ,READ ONLY , INITLIZATION  , ASSIGNMENT 
    speak() {
        // this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}
const ppr = new PersonPrivateReadonly("hello");
// tom.msg = "hello"
ppr.speak();
