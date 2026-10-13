"use strict";
var GenericNamespace;
(function (GenericNamespace) {
    class Automobile {
        name;
        wheels;
        constructor(name, wheels) {
            this.name = name;
            this.wheels = wheels;
        }
        getName() {
            return this.name;
        }
        getWheelCount() {
            return this.wheels;
        }
        ;
    }
    class Chevy extends Automobile {
        constructor() {
            super("Chevy", { count: 4, diameter: 18 });
        }
    }
    const chevy = new Chevy();
    console.log("Car name " + chevy.getName());
    console.log("Wheels " + chevy.getWheelCount());
})(GenericNamespace || (GenericNamespace = {}));
