function parentFunction(){
    console.log("This function belongs to the root level context")

    this.childFunction = function(){
        console.log("This function is owned by", this);
    }

    this.childFunction();
}
parentFunction();
globalThis.parentFunction();
console.log("This is outer ", this)