let myString = "EElllzzzzzzzeroo";

// Elzero
let result = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
  })
  .join();
console.log(result);
