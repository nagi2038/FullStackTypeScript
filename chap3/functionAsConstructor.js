function MyFunction(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function () {
    console.log(`My name is ${this.name}`);
  };
}

const person = new MyFunction("jan", 25);
person.speak();
console.log(`My age is ${person.age}`);
