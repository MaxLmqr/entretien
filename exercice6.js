//

const myArray = [
  { type: "text", value: "Hello" },
  { type: "text", value: "World" },
  { type: "button", value: "Refresh" },
];

const deleteArrayIndex = (index, array) => {
  array.splice(index, 1);
};
deleteArrayIndex(1, myArray);

console.log(myArray);
