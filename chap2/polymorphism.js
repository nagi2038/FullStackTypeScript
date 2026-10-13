"use strict";
class Wolf {
    name = "";
    runMaxMiles(hours) {
        return 45 * hours;
    }
}
class Cheetha {
    name = "";
    runMaxMiles(hours) {
        return 75 * hours;
    }
}
const hours = 0.5;
function pickTheBestAnimalToRun(hours) {
    let animal;
    if (hours >= 0.5) {
        animal = new Wolf();
        animal.name = "Wolfie";
    }
    else {
        animal = new Cheetha();
        animal.name = "Cheetos";
    }
    if (animal instanceof Wolf) {
        console.log("This is  a wolf");
    }
    if (animal instanceof Cheetha) {
        console.log("This is a Cheetah");
    }
    return animal.runMaxMiles(hours);
}
pickTheBestAnimalToRun(hours);
