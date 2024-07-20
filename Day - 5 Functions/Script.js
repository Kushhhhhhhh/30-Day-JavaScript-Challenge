// Activity 1 - Function Declaration

// Task 1
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(5));

// Task 2
function Square(number) {
    return number * number;
}
console.log(Square(5));

// Activity 2 - Function Expression

// Task 3
const findMax = function (a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}
console.log(findMax(5, 6));

// Task 4
const concatenate = function (str1, str2) {
    return str1 + " " + str2;
}
console.log(concatenate("Hello", "World"));

// Activity 3 - Arrow Function

// Task 5
const add = (a, b) => a + b;
console.log(add(5, 6));

// Task 6
const stringChecker = (str) => {
    if (str.includes("kushi")) {
        return true;
    } else {
        return false;
    }
} 
console.log(stringChecker("hello world , I'm kush"));

// Activity 4 - Default Value and Function Parameters

// Task 7
const anyFunction = (a=0, b=0) => {
    return a * b;
}
console.log(anyFunction(5, 6));

// Task 8
const greeting = (name, age=20) => {
    return "Hello " + name + " , your age is " + age;
}
console.log(greeting("kush"));

// Activity 5 - Higher-Order Functions

// Task 9
const repeatFunction = (func, num) => {
    return () => {
        for (let i = 0; i < num; i++) {
            func();
        }
    };
};
const sayHi = () => console.log("Hi");
const repeatHi = repeatFunction(sayHi, 10);
repeatHi();

// Task 10
const parentFunction = (child1Func, child2Func, value) => {
    const result1 = child1Func(value);
    const result2 = child2Func(result1);
    console.log(result2);
}

parentFunction(
    (value) => value * 2,
    (value) => value * 3,
    5
);