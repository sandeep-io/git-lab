// IF...ELSE example
let number = 10;

if (number > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is negative or zero");
}

// NESTED IF example
let marks = 75;

if (marks >= 50) {
    if (marks >= 75) {
        console.log("Grade: Distinction");
    } else {
        console.log("Grade: Pass");
    }
} else {
    console.log("Grade: Fail");
}

// SWITCH example
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
}