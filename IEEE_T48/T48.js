function calculate(firstNum, secondNum, operation) {
  if (typeof firstNum === "number" && secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (
    typeof firstNum === "number" &&
    typeof secondNum === "number" &&
    operation === undefined
  ) {
    console.log(firstNum + secondNum);
  } else if (
    typeof firstNum === "number" &&
    typeof secondNum === "number" &&
    operation === "add"
  ) {
    console.log(firstNum + secondNum);
  } else if (
    typeof firstNum === "number" &&
    typeof secondNum === "number" &&
    operation === "subtract"
  ) {
    console.log(firstNum - secondNum);
  } else if (
    typeof firstNum === "number" &&
    typeof secondNum === "number" &&
    operation === "multiply"
  ) {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
