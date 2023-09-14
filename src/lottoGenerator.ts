/*
# Summary

You will write a function which generates and prints a list of 6 random, unique (non-repeating) integers which can be anywhere in the range from 1 to 70.

The numbers must be printed in ascending order.

### Engineering requirements

It is crucial that:

- you break your solution down into multiple cooperating functions - essentially, as many as possible for this exercise.
- All your variables and functions are appropriately named.
- You write tests for as many as possible of your functions as possible.

PSEUDOCODE:

input: none
output: list of 6 unique random numbers (whole) in ascending order

FUNCTIONS:
1) generateRandomNum - generate random number between 1 and 70;
2) createListOfSix - create an array with 6 unique random numbers;
3) sortListAsc - sort the array of random numbers in ascending order; 


*/

function generateRandomNum() {
  return Math.floor(Math.random() * 70 + 1);
}

function createListOfSix() {
  const listOfSix: number[] = [];
  for (let i = 0; i < 6; i++) {
    const randomNum = generateRandomNum();
    if (listOfSix.includes(randomNum)) {
      i--;
    } else {
      listOfSix.push(randomNum);
    }
  }
  return listOfSix;
}

function sortListAsc() {
  return createListOfSix().sort((a, b) => a - b);
}

for (let i = 0; i < 100; i++) {
  console.log(sortListAsc());
}
