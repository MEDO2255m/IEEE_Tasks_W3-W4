let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce((acc, current) => acc.concat(current), []).join("");

console.log(result); // Elzero
