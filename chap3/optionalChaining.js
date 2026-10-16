class Wheels{
    count;
    constructor(count){
        this.count = count;
    }

    wheelCount = function(){
        return this.count;
    }
}

class Vehicle{
    wheels;

    constructor(count){
        if(count>0){
            this.wheels = new Wheels(count);
        }
    }
}

class Automobile extends Vehicle{
    constructor(count){
        super(count)
    }
}

let car = undefined
console.log("Wheels", car?.wheels)

let car1 = new Automobile(undefined)
console.log("wheel Count", car1.wheels?.wheelCount())

