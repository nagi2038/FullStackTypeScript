function areEqual(left, right) {
  if (left === right) return true;
  return false;
}

// ================= test 1 ========================
// const usera = {
//   name: "jon",
//   age: 25,
// };

// const userb = {
//   name: "jon",
//   age: 25,
// };

// ================= test 2 ========================
// const usera = "jon";
// const userb = "jon";

// ================= test 3 ========================
const usera = "25";
const userb = 25;

console.log(`result : ${areEqual(usera, userb)}`);
