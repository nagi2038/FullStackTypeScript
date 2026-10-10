interface Employee{
    name : string;
    id : number;
    isManger : boolean;
    getUniqueid : () => string;
}

const linda : Employee = {
    name : "linda",
    id : 2,
    isManger : false,
    getUniqueid : () : string =>{
        let uniqueId = linda.id + "-" + linda.name;
        if(!linda.isManger){
            return "emp-"+uniqueId
        }
        return uniqueId;
    } 
}
console.log(linda.getUniqueid())

const pam : Employee = {
    name : "pam",
    id : 1,
    isManger : true,
    getUniqueid : () : string =>{
        let uniqueId = pam.id+"-"+pam.name;
        if(!pam.isManger){
            return "emp-"+uniqueId
        }
        return uniqueId
    }
}

console.log(pam.getUniqueid())