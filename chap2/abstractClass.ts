namespace AbstractNamespace {
    abstract class Vehicle{
    constructor(protected wheelCount : number){}; // "private" is only for the class not even child can access it .
    // "protected" inheritance member can access it.
    abstract updateWheelCount(newWheelCount : number): void;
    showNumberOfWheels(){
        console.log(`wheels : ${this.wheelCount}`)
    }
}

class Motorcycle extends Vehicle{
    constructor(){
        super(2)
    }
    updateWheelCount(newWheelcount: number){
        this.wheelCount = newWheelcount;
        console.log(`Motorcycle has ${this.wheelCount} wheels`)
    }
}

class Automobile extends Vehicle{
    constructor(){
        super(4)
    }
    updateWheelCount(newWheelCount: number): void {
        this.wheelCount = newWheelCount
        console.log(`Automobile has ${this.wheelCount} wheels`)
    }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();


const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();

motorCycle.updateWheelCount(1)
motorCycle.showNumberOfWheels();

autoMobile.updateWheelCount(3);
autoMobile.showNumberOfWheels();

}
