// Ce programme doit afficher tous les diviseurs de 18

const dividend = 18;
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

for (let idx = 0; idx < numbers.length; idx++) {
  let factor;
  let divisor = numbers[idx];

  if (dividend % divisor == 0) {
    factor = true;
  }

  if (factor) {
    console.log(divisor + " is a factor of " + dividend + "!");
  }
}
