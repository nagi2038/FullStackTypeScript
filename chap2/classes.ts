class Person {
  constructor() {}
  msg: string = "";
  speak() {
    console.log(this.msg);
  }
}
const tom = new Person();
tom.msg = "hello";
tom.speak();

class PersonPrivate {
  constructor(private msg: string) {} // CONVER BOTH DECLARATION AND INITLIZATION
  speak() {
    console.log(this.msg);
  }
}
const pp = new PersonPrivate("hello");
// tom.msg = "hello";
pp.speak();

class PersonPrivateVerbose {
  private msg: string;
  constructor(msg: string) {
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
  constructor(private readonly msg: string) {} // PRIVATE ,READ ONLY , INITLIZATION  , ASSIGNMENT 
  speak() {
    // this.msg = "speak " + this.msg;
    console.log(this.msg);
  }
}
const ppr = new PersonPrivateReadonly("hello");
// tom.msg = "hello"
ppr.speak();
