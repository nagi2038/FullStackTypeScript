"use strict";
const linda = {
    name: "linda",
    id: 2,
    isManger: false,
    getUniqueid: () => {
        let uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManger) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueid());
const pam = {
    name: "pam",
    id: 1,
    isManger: true,
    getUniqueid: () => {
        let uniqueId = pam.id + "-" + pam.name;
        if (!pam.isManger) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueid());
