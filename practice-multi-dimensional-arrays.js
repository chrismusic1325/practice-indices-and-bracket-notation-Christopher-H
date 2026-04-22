let library = [
  ["Harry Potter", "The Hobbit", "Inception"],
  ["Titanic", "Avengers", "Interstellar"],
  ["The Matrix", "Frozen", "Jurassic Park"]
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

// Task 3: Access and log all elements using variables as indices
let row;
let item;

for (row = 0; row < library.length; row++) {
  for (item = 0; item < library[row].length; item++) {
    console.log(library[row][item]);
  }
}

// Task 4: Write a loop that prints all the items on the second shelf
for (let i = 0; i < library[1].length; i++) {
  console.log(library[1][i]);
}
