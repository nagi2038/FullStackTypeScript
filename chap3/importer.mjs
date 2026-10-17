import Greeting ,{currentUser} from "./module.mjs"
Greeting();

export function print1(){
    currentUser.age = 21;
    console.log("Current user age", currentUser.age)
}