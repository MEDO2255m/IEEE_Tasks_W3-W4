function sayHello(theName, theGender) {
  console.log(
    theGender == "Male"
      ? `Hello Mr ${theName}`
      : theGender == "Female"
        ? `Hello Miss ${theName}`
        : `Hello ${theName}`,
  );
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
