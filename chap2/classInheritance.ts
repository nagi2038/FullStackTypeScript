class Vehicle{
    constructor(protected wheelCount : number){}; // "private" is only for the class not even child can access it .
    // "protected" inheritance member can access it.
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
    }
}

class Automobile extends Vehicle{
    constructor(){
        super(4)
    }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();

const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();