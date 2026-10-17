const allTrucks = [2, 5, 7, 10];
const initalCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
  console.log(
    `totalCapacity : ${totalCapacity}, currentCapacity : ${currentCapacity}, initalCapacity : ${initalCapacity}`,
  );
  totalCapacity = totalCapacity + currentCapacity;
  return totalCapacity;
}, initalCapacity);
console.log(allTonnage);
console.log(initalCapacity);
