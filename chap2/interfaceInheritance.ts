namespace InterfaceNamespace{
    interface Thing{
        name : string;
        getFullName : () => string;
    }

    interface Vehicle extends Thing{
        wheelCount : number;
        updateWheelCount : (newWheelCount : number) => void;
        showNumberOfWheels : () => void;
    }

    class MotorCycle implements Vehicle{
        name : string;
        wheelCount: number = 0;
        constructor(name: string){this.name = name}

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motor cycle has ${this.wheelCount}`);
        }

        showNumberOfWheels(){
            console.log(`Motor cycle has ${this.wheelCount} wheels`)
        }

        getFullName(){
            return "MC-" + this.name;
        }

    }

    const moto = new MotorCycle("Beginner-cycle")
    console.log(moto.getFullName())
}