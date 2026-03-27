let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result = mix
  .map(function (ele) {
    return typeof ele === "string" ? ele : "";
  })
  .reduce(function (acc, cuurent) {
    return acc + cuurent;
  });
console.log(result);
