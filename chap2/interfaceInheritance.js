"use strict";
var InterfaceNamespace;
(function (InterfaceNamespace) {
    class MotorCycle {
        name;
        wheelCount = 0;
        constructor(name) { this.name = name; }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motor cycle has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`Motor cycle has ${this.wheelCount} wheels`);
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }
    const moto = new MotorCycle("Beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
