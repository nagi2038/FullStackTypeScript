"use strict";
class Speaker {
    name;
    #message = "";
    constructor(name) {
        this.name = name;
    }
    ;
    get Message() {
        if (!this.#message.startsWith(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.#message;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.startsWith(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.#message = tmpMessage;
    }
}
const speaker = new Speaker("John");
speaker.Message = "hello";
console.log(speaker.Message);
