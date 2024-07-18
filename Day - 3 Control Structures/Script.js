// Activity 1 - If else Statements

// Task 1
let a = 10;
if (a > 0){
    console.log("Positive");
} else if (a < 0){
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task 2
let age = 20;
if (age >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Activity 2 - Nested If else Statements

// Task 3
let b = 40;
let c = 20;
let d = 30;
if (b > c){
    if (b > d){
        console.log("b is greater");
    } else {
        console.log("d is greater");
    }
} else if (c > d){
    console.log("c is greater");
} else {
    console.log("d is greater");
}

// Activity 3 - Switch Case

// Task 4
switch (new Date().getDay()) {
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

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        break;
}

// Task 5
function getGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
      return "Invalid score. Please enter a number between 0 and 100.";
    }
  
    let grade;
    switch (true) {
      case score >= 90:
        grade = "A";
        break;
      case score >= 80:
        grade = "B";
        break;
      case score >= 70:
        grade = "C";
        break;
      case score >= 60:
        grade = "D";
        break;
      default:
        grade = "F";
    }
  
console.log(`Your score of ${score} corresponds to a grade of ${grade}.`);
    return grade; 
  }
  
  let myScore = 85;
  let myGrade = getGrade(myScore);

// Activity 4 - Ternary Operator

// Task 6
let e = 10;
let f = 5;
let result5 = (e % 2 === 0) ? "e is even" : "e is odd";
let result6 = (f % 2 === 0) ? "f is even" : "f is odd";
console.log(result5, result6);

// Activity 5 - Combining Conditions

// Task 7
let year = 2025;
let result7 = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap year" : "Not a leap year";
console.log(result7);