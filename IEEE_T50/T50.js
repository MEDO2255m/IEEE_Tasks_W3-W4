function checkStatus(a, b, c) {
  let name, age, hire;
  typeof a === "string"
    ? (name = a)
    : typeof b === "string"
      ? (name = b)
      : typeof c === "string"
        ? (name = c)
        : null;

  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
      ? (age = b)
      : typeof c === "number"
        ? (age = c)
        : null;

  typeof a === "boolean"
    ? (hire = a)
    : typeof b === "boolean"
      ? (hire = b)
      : typeof c === "boolean"
        ? (hire = c)
        : null;

  console.log(
    `Hello ${name}, Your Age Is ${age}, ${
      hire ? "You Are Available For Hire" : "You Are Not Available For Hire"
    }`,
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
