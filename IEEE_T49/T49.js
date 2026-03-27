function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 52} Weeks`);
    console.log(`${theAge * 360} days`);
    console.log(`${theAge * 360 * 24} hours`);
    console.log(`${theAge * 360 * 24 * 60} Minutes`);
    console.log(`${theAge * 360 * 24 * 60 * 60} Seconds`);
  } else {
    console.log(` Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
