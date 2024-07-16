// Day - 1 Variables and Data Types

// Activity 1 - Variable Declaration

// Task 1
var a = 10;
console.log(a);

// Task 2
let author = 'kush';
console.log(author);

// Activity 2 - Constant Declaration

// Task 3
const isPass = true; 
console.log(isPass);

// Activity 3 - Data Types

// Task 4
let studentName = 'kush';
let studentAge = 20;
let studentPass = true;
let studentSubject = ['Data Structures', 'Software Engineering', 'Operating System'];
let studentMarks = {
    DataStructures: 10,
    SoftwareEngineering: 8,
    OperatingSystem: 9
}

console.log(studentName, studentAge, studentPass, studentSubject, studentMarks);

// Activity 4 - Reassigning Variable

// Task 5
let k = 10;
k = 20;
console.log("Let: ", k);

// Activity 5 - Understanding Const

// Task 6
const b = 10;
b = 20;
console.log("Const: ", b);

// Feature Request
// 1. Variable Types Console Log

console.log("Variable Types: ", 
    typeof a, 
    typeof author, 
    typeof isPass,  
    typeof studentMarks,
    typeof studentSubject);


// Demonstration of 'let' and 'const' behavior in JavaScript

// Using 'let'
console.log("Demonstration with 'let':");
let number = 5;
console.log("Initial value:", number);
number = 10; // Reassigning the value
console.log("Reassigned value:", number);

// Using 'const'
console.log("\nDemonstration with 'const':");
const constantNumber = 5;
console.log("Initial value:", constantNumber);
// constantNumber = 10; // Attempting to reassign the value (This will cause an error)
try {
    constantNumber = 10;
} catch (error) {
    console.log("Error:", error.message);
}

// Demonstrating object and array reassignment
console.log("\nDemonstration with objects and arrays:");

// Using 'let'
let obj = {value: 5};
console.log("Initial object:", obj);
obj = {value: 10}; // Reassigning the object
console.log("Reassigned object:", obj);

let arr = [1, 2, 3];
console.log("Initial array:", arr);
arr = [4, 5, 6]; // Reassigning the array
console.log("Reassigned array:", arr);

// Using 'const'
const constObj = {value: 5};
console.log("Initial constant object:", constObj);
// constObj = {value: 10}; // Attempting to reassign the object (This will cause an error)
try {
    constObj = {value: 10};
} catch (error) {
    console.log("Error:", error.message);
}

const constArr = [1, 2, 3];
console.log("Initial constant array:", constArr);
// constArr = [4, 5, 6]; // Attempting to reassign the array (This will cause an error)
try {
    constArr = [4, 5, 6];
} catch (error) {
    console.log("Error:", error.message);
}

// Demonstrating the difference in modifying properties of objects and elements in arrays
console.log("\nModifying properties of objects and elements in arrays:");

// Using 'let'
console.log("Modifying object property:");
let modifiedObj = {value: 5};
console.log("Initial modified object:", modifiedObj);
modifiedObj.value = 10; // Modifying the property
console.log("Modified object property:", modifiedObj);

console.log("Modifying array element:");
let modifiedArr = [1, 2, 3];
console.log("Initial modified array:", modifiedArr);
modifiedArr[0] = 4; // Modifying the element
console.log("Modified array element:", modifiedArr);

// Using 'const'
console.log("Modifying property of constant object:");
const constModifiedObj = {value: 5};
console.log("Initial constant modified object:", constModifiedObj);
constModifiedObj.value = 10; // Modifying the property (Allowed)
console.log("Modified constant object property:", constModifiedObj);