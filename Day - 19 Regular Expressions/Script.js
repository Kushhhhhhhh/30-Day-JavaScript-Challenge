// Activity 1 - Basic Regular Expressions

// Task 1 
const regex = /javascript/g;
//  The g flag is crucial for global matching, meaning it finds all occurrences in the string.
const string = "This is a javascript string with multiple javascript occurrences because of the g flag and it is case sensitive and helps us find all the javascript occurrences in the string.";
const matches = string.match(regex);
console.log(matches); 

// Task 2
const regex2 = /143/g;
const string2 = '143 is my favorite number as it also means I love you in some sort of code language. Also, 143 is a prime number';
const matches2 = string2.match(regex2);
console.log(matches2);

// Activity 2 - Character Classes and Quantifiers

// Task 3
const regex3 = /\b[A-Z]\w*\b/g;
const string3 = "This is a String With Multiple Capitalized Words written by Kush";
const matches3 = string3.match(regex3);
console.log(matches3); 

// Task 4
const string4 = "This is a string with 123 numbers, like 456 or 7890.";
const regex4 = /\d+/g; 
const matches4 = string4.match(regex4);
console.log(matches4);

// Activity 3 - Grouping and Capturing

// Task 5
let phoneNumber = "(123) 456-7890";

let pattern = /\((?<areaCode>\d{3})\)\s(?<centralOfficeCode>\d{3})-(?<lineNumber>\d{4})/;

let match = phoneNumber.match(pattern);

if (match) {
    console.log("Area Code:", match.groups.areaCode);
    console.log("Central Office Code:", match.groups.centralOfficeCode);
    console.log("Line Number:", match.groups.lineNumber);
} else {
    console.log("No match found");
}

// Task 6
const regex5 = /(?<username>[^@]+)@(?<domain>[^@]+)/;
const string5 = "kush@gmail.com";
const match5 = string5.match(regex5);
if (match5) {
    console.log(match5.groups.username);
    console.log(match5.groups.domain);
} else {
    console.log("No match found");
}

// Activity 4 - Assertions and Boundaries

// Task 7
let strings = ["hello world", "hello", "goodbye hello", "hellohello", "hello world hello"];

let regex7 = /^hello\b/;

for (let string of strings) {
    let match = string.match(regex7);
    if (match) {
        console.log(`Match found: ${match[0]}`);
    } else {
        console.log("No match found");
    }
}

// Task 8
let strings2 = ["hello world", "world", "goodbye world", "worldworld", "hello world"];

let regex8 = /\bworld$/;

for (let string of strings2) {
    let match = string.match(regex8);
    if (match) {
        console.log(`Match found: ${match[0]}`);
    } else {
        console.log("No match found");
    }
}

// Activity 5 - Practical Applications

// Task 9
function validatePassword(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (pattern.test(password)) {
        console.log("Password is valid");
    } else {
        console.log("Password is not valid");
    }
}

let password = "Password@123";
validatePassword(password);
let password2 = "password@123";
validatePassword(password2);

// Task 10

function validateUrl(url) {
    let pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (pattern.test(url)) {
        console.log("URL is valid");
    } else {
        console.log("URL is not valid");
    }
}

let url = "https://www.google.com";
validateUrl(url);