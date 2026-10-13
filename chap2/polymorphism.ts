interface Animal {
  name: string;
  runMaxMiles(hours: number): number;
}

class Wolf implements Animal {
  name: string = "";
  runMaxMiles(hours: number): number {
    return 45 * hours;
  }
}

class Cheetha implements Animal{
    name: string = "";
    runMaxMiles(hours: number): number {
        return 75 * hours;
    }
}

const hours = 0.5;
function pickTheBestAnimalToRun(hours : number) : number{
    let animal : Animal | undefined;
    if(hours>=0.5){
        animal = new Wolf();
        animal.name = "Wolfie"
    }
    else{
        animal = new Cheetha();
        animal.name = "Cheetos";
    }

    if ( animal instanceof Wolf){
        console.log("This is  a wolf")
    }
    if (animal instanceof Cheetha){
        console.log("This is a Cheetah")

    }

    return animal.runMaxMiles(hours)
}
pickTheBestAnimalToRun(hours)