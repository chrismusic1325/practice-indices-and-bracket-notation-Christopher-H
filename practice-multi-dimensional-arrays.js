let library = [
  ["Harry Potter", "The Hobbit", "Lord of the Rings"],
  ["Inception", "The Matrix", "Interstellar"],
  ["Titanic", "Avatar", "The Dark Knight"]
];

// Task 2: Access and log all elements using bracket notation with numbers
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);
console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);
console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);

// Task 3: Access and log all elements using variables
for (let row = 0; row < library.length; row++) {
  for (let item = 0; item < library[row].length; item++) {
    console.log(library[row][item]);
  }
}

// Task 4: Write a loop that prints all the items on the second shelf
for (let item = 0; item < library[1].length; item++) {
  console.log(library[1][item]);
}
