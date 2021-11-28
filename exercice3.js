// Ce code doit afficher hey amy

function greet(person) {
  if (person === { name: "amy" }) {
    console.log("hey amy");
  } else {
    console.log("hey arnold");
  }
}
greet({ name: "amy" });
