function getEmployee(id) {
  return {
    name: "John",
    age: 35,
    address: "123 st",
    country: "US",
  };
}

const { name: fullName, age } = getEmployee(22);
console.log("employee : ", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "White St", "France"];
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log("Employee : ", id, officeAddress);
