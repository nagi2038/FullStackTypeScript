const employee = [
  { name: "tim", id: 1 },
  { name: "cindy", id: 2 },
  { name: "rob", id: 3 },
];

const elements = employee.map((item, index) => {
  return `<div>${item.id} - ${item.name}</div>`;
});
console.log(elements);

const elementlist = employee.map((item) => [item.name , item.id])
console.log(elementlist)